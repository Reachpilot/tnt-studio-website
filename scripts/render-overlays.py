#!/usr/bin/env python3
"""
Render two 16:9 MP4 overlays:
  1. Social Media Strategie (lila)
  2. Website (blau)
Usage:
    python3 scripts/render-overlays.py
"""
import os
import math
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    raise SystemExit("Pillow fehlt. Installiere: pip install Pillow")

try:
    import imageio.v3 as iio
except ImportError:
    raise SystemExit("imageio fehlt. Installiere: pip install imageio imageio-ffmpeg")

# -------------------------------- config ---------------------------------
WIDTH, HEIGHT = 1920, 1080
FPS = 30
DURATION = 3.0  # seconds
FRAMES = int(FPS * DURATION)
BG = (0, 255, 0)  # green for chroma key

# Colors
LILA = (176, 38, 255)
BLAU = (0, 150, 255)

# Try to load Montserrat, fall back to system fonts
def get_font(size):
    for name in ["Montserrat-Black.ttf", "Montserrat-ExtraBold.ttf", "Montserrat-Bold.ttf"]:
        try:
            return ImageFont.truetype(name, size)
        except Exception:
            pass
    # macOS common locations
    for path in [
        "/Library/Fonts/Montserrat-Black.ttf",
        "/System/Library/Fonts/Supplemental/Montserrat-Black.ttf",
        os.path.expanduser("~/Library/Fonts/Montserrat-Black.ttf"),
    ]:
        try:
            return ImageFont.truetype(path, size)
        except Exception:
            pass
    # fallback sans
    for name in ["Arial Black", "Helvetica Bold", "San Francisco", "DejaVuSans-Bold"]:
        try:
            return ImageFont.truetype(name, size)
        except Exception:
            pass
    return ImageFont.load_default()

# Simple SVG-like icon shapes drawn with PIL
def draw_social_icon(d, x, y, size, color):
    # phone/chat bubble icon
    s = size
    d.rounded_rectangle([x - s/2, y - s/2, x + s/2, y + s/2], radius=s/8, outline=color, width=8)
    d.ellipse([x - s/4, y - s/6, x - s/4 + s/8, y - s/6 + s/8], fill=color)
    d.ellipse([x, y - s/6, x + s/8, y - s/6 + s/8], fill=color)
    d.ellipse([x + s/4, y - s/6, x + s/4 + s/8, y - s/6 + s/8], fill=color)

def draw_website_icon(d, x, y, size, color):
    # globe icon
    s = size
    d.ellipse([x - s/2, y - s/2, x + s/2, y + s/2], outline=color, width=8)
    d.arc([x - s/2, y - s/2, x + s/2, y + s/2], start=0, end=180, fill=color, width=6)
    d.arc([x - s/2, y - s/2, x + s/2, y + s/2], start=180, end=360, fill=color, width=6)
    d.line([(x, y - s/2), (x, y + s/2)], fill=color, width=6)
    d.line([(x - s/2, y), (x + s/2, y)], fill=color, width=6)

def render_overlay(name, title, color, icon_drawer, font_size=120):
    font = get_font(font_size)
    out_path = Path(__file__).parent.parent / f"overlay-{name}.mp4"
    writer = iio.imopen(out_path, "w", plugin="FFMPEG", fps=FPS, codec="libx264", quality=8)

    for i in range(FRAMES):
        img = Image.new("RGB", (WIDTH, HEIGHT), BG)
        d = ImageDraw.Draw(img)

        # Ease-out cubic for smooth slide
        t = i / (FRAMES - 1)
        # Start below, move up, settle, then exit top
        if t < 0.20:
            # bottom -> center
            p = t / 0.20
            ease = 1 - (1 - p) ** 3
            y = HEIGHT + 200 - (HEIGHT * 0.5 + 200) * ease
        elif t < 0.70:
            # hold center
            y = HEIGHT * 0.5
        else:
            # center -> top
            p = (t - 0.70) / 0.30
            ease = p ** 2
            y = HEIGHT * 0.5 - (HEIGHT * 0.5 + 300) * ease

        # icon above text
        icon_y = y - font_size * 1.3
        icon_drawer(d, WIDTH / 2, icon_y, 90, color)

        # draw text centered
        bbox = d.textbbox((0, 0), title, font=font, anchor="lt")
        text_w = bbox[2] - bbox[0]
        text_h = bbox[3] - bbox[1]
        x = (WIDTH - text_w) / 2
        text_y = y - text_h / 2

        # subtle glow / shadow
        for offset in [(4, 4), (-4, -4), (4, -4), (-4, 4)]:
            d.text((x + offset[0], text_y + offset[1]), title, font=font, fill=(0, 0, 0), anchor="lt")
        d.text((x, text_y), title, font=font, fill=color, anchor="lt")

        writer.write(img)

    writer.close()
    print(f"Fertig: {out_path}")

def main():
    print("Generiere Overlay-Videos...")
    render_overlay(
        "social-media-strategie",
        "Social Media\nStrategie",
        LILA,
        draw_social_icon,
        font_size=130
    )
    render_overlay(
        "website",
        "Website",
        BLAU,
        draw_website_icon,
        font_size=180
    )
    print("Alle Overlays erstellt.")

if __name__ == "__main__":
    main()
