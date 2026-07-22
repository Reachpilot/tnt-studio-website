#!/usr/bin/env python3
"""
Generate an MP4 that looks like someone is typing out a source file.
Usage:
    python3 scripts/generate-typing-video.py src/pages/BlogPost.tsx
"""
import sys
import os
import re
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    raise SystemExit("Pillow fehlt. Bitte installieren: pip install Pillow")

try:
    import imageio.v3 as iio
except ImportError:
    raise SystemExit("imageio fehlt. Bitte installieren: pip install imageio imageio-ffmpeg")

# ------------------------------- config -----------------------------------
LINE_HEIGHT = 28
MARGIN = 24
LINENO_WIDTH = 64
PADDING_X = 20
PADDING_Y = 24
FPS = 30
MAX_DURATION_SEC = 120
CHARS_PER_FRAME = 4   # typing speed: 4 chars per video frame
LINE_REVEAL_PAUSE_FRAMES = 3  # slight pause after a newline
CANVAS_WIDTH = 1280
CANVAS_HEIGHT = 720
FONT_SIZE = 16

THEME = {
    "bg": (13, 17, 23),
    "text": (201, 209, 217),
    "lineno": (88, 96, 105),
    "lineno_bg": (22, 27, 34),
    "cursor": (88, 166, 255),
    "keyword": (255, 123, 114),
    "string": (165, 214, 104),
    "comment": (139, 148, 158),
    "number": (121, 192, 255),
    "function": (210, 168, 255),
    "tag": (126, 231, 135),
}

# simple keyword lists for TSX/TS/JSX/JS/HTMl-ish files
KEYWORDS = {
    "import", "from", "export", "default", "function", "return", "const",
    "let", "var", "if", "else", "for", "while", "switch", "case", "break",
    "continue", "try", "catch", "finally", "class", "extends", "new", "this",
    "typeof", "interface", "type", "as", "await", "async", "true", "false",
    "null", "undefined", "yield", "void",
}

# ------------------------------- helpers ---------------------------------
def get_mono_font(size):
    for name in ["JetBrains Mono", "Fira Code", "SF Mono", "Menlo", "Consolas", "Monaco", "DejaVu Sans Mono"]:
        try:
            return ImageFont.truetype(name, size)
        except Exception:
            pass
    try:
        return ImageFont.truetype("/System/Library/Fonts/Menlo.ttc", size)
    except Exception:
        return ImageFont.load_default()

def tokenize(line):
    """Very simple tokenization for coloring."""
    tokens = []
    i = 0
    n = len(line)
    while i < n:
        # string
        if line[i] in '"\'`':
            q = line[i]
            j = i + 1
            while j < n and line[j] != q:
                if line[j] == '\\' and j + 1 < n:
                    j += 2
                else:
                    j += 1
            if j < n:
                j += 1
            tokens.append(("string", line[i:j]))
            i = j
            continue
        # comment
        if line[i:i+2] == "//":
            tokens.append(("comment", line[i:]))
            break
        # number
        m = re.match(r'\d+(\.\d+)?', line[i:])
        if m:
            tokens.append(("number", m.group(0)))
            i += len(m.group(0))
            continue
        # word
        m = re.match(r'[A-Za-z_][A-Za-z0-9_]*', line[i:])
        if m:
            word = m.group(0)
            kind = "keyword" if word in KEYWORDS else "text"
            tokens.append((kind, word))
            i += len(word)
            continue
        # html tag-ish identifiers after <
        if line[i] == "<" and i + 1 < n and line[i+1] not in " /":
            j = i + 1
            while j < n and line[j] not in " />\n":
                j += 1
            tokens.append(("text", "<"))
            tokens.append(("tag", line[i+1:j]))
            i = j
            continue
        # generic text / punctuation
        tokens.append(("text", line[i]))
        i += 1
    return tokens

def wrap_lines(src, max_chars):
    """Wrap long source lines so they fit horizontally."""
    out = []
    for i, raw in enumerate(src.splitlines()):
        while len(raw) > max_chars:
            out.append(raw[:max_chars])
            raw = "    " + raw[max_chars:]
        out.append(raw)
    return out

def render_frame(lines, cursor_line, cursor_col, font, draw, lineno_width, total_lines):
    img = Image.new("RGB", (CANVAS_WIDTH, CANVAS_HEIGHT), THEME["bg"])
    d = ImageDraw.Draw(img)
    # line-number gutter background
    d.rectangle([(0, 0), (lineno_width, CANVAS_HEIGHT)], fill=THEME["lineno_bg"])

    # draw visible lines
    visible_height = CANVAS_HEIGHT - PADDING_Y * 2
    max_visible = visible_height // LINE_HEIGHT

    # scroll: keep cursor in middle-ish
    start = max(0, cursor_line - max_visible // 2 + 1)
    end = min(total_lines, start + max_visible)

    y = PADDING_Y
    for idx in range(start, end):
        line = lines[idx] if idx < len(lines) else ""
        # line number
        d.text((MARGIN, y), f"{idx+1:4d}", font=font, fill=THEME["lineno"])
        x = lineno_width + PADDING_X

        if idx < cursor_line:
            # fully shown line
            draw_tokens(d, line, x, y, font)
        elif idx == cursor_line:
            # partially shown up to cursor_col
            partial = line[:cursor_col]
            _, new_x = draw_tokens(d, partial, x, y, font)
            # blinking cursor
            d.rectangle([(new_x, y), (new_x + 9, y + LINE_HEIGHT - 4)], fill=THEME["cursor"])
        # future lines are not drawn
        y += LINE_HEIGHT

    return img

def draw_tokens(d, text, x, y, font):
    """Draw text with simple syntax coloring, return width."""
    for kind, token in tokenize(text):
        color = THEME[kind]
        d.text((x, y), token, font=font, fill=color)
        width = d.textlength(token, font=font)
        x += width
    return x

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/generate-typing-video.py <path-to-source>")
        sys.exit(1)

    src_path = Path(sys.argv[1]).resolve()
    if not src_path.exists():
        raise SystemExit(f"Datei nicht gefunden: {src_path}")

    raw = src_path.read_text(encoding="utf-8")
    max_chars = (CANVAS_WIDTH - LINENO_WIDTH - PADDING_X - MARGIN) // 9
    lines = wrap_lines(raw, max_chars)
    total_lines = len(lines)

    font = get_mono_font(FONT_SIZE)

    # Pre-calculate frame count
    total_chars = sum(len(l) for l in lines)
    total_frames = total_chars // CHARS_PER_FRAME + total_lines * LINE_REVEAL_PAUSE_FRAMES + FPS * 3  # 3s end pause

    out_file = Path(__file__).parent.parent / f"typing-{src_path.stem}.mp4"

    print(f"Generiere {out_file.name}")
    print(f"Zeilen: {total_lines}, Zeichen: {total_chars}, geschätzte Frames: {total_frames}")

    writer = iio.imopen(out_file, "w", plugin="FFMPEG", fps=FPS, codec="libx264", quality=8)

    line_idx = 0
    col_idx = 0
    pause = 0
    frame_count = 0
    chars_since_frame = 0

    while line_idx < total_lines:
        # advance cursor
        if pause > 0:
            pause -= 1
        else:
            chars_since_frame += CHARS_PER_FRAME
            while chars_since_frame > 0 and line_idx < total_lines:
                current = lines[line_idx]
                if col_idx < len(current):
                    step = min(chars_since_frame, len(current) - col_idx)
                    col_idx += step
                    chars_since_frame -= step
                else:
                    # end of line -> pause and go next
                    pause = LINE_REVEAL_PAUSE_FRAMES
                    line_idx += 1
                    col_idx = 0
                    chars_since_frame = 0
                    break

        frame = render_frame(lines, line_idx if line_idx < total_lines else total_lines - 1,
                             col_idx, font, None, LINENO_WIDTH, total_lines)
        writer.write(frame)
        frame_count += 1

    # hold last frame for a few seconds
    last_frame = render_frame(lines, total_lines, 0, font, None, LINENO_WIDTH, total_lines)
    for _ in range(FPS * 3):
        writer.write(last_frame)
        frame_count += 1

    writer.close()
    print(f"Fertig: {out_file} ({frame_count} frames)")

if __name__ == "__main__":
    main()
