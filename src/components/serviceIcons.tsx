import type { ReactNode } from 'react'

const s = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

// Detailreichere SVG-Icons pro Service (24x24, Stroke-Style)
export const serviceIcons: Record<string, ReactNode> = {
  // Web Design: Browser-Fenster mit Layout-Bloecken
  code: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" {...s} />
      <path d="M3 9.5h18" {...s} />
      <circle cx="5.8" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="8.2" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
      <rect x="6" y="12" width="5" height="5" rx="1" {...s} />
      <path d="M13.5 12.5h4.5M13.5 15h4.5M13.5 17.5h3" {...s} />
    </>
  ),
  // KI-Sichtbarkeit & SEO: Chat-Blase mit KI-Sparkle
  terminal: (
    <>
      <path d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v7a2.5 2.5 0 01-2.5 2.5H9l-5 4v-4.2A2.5 2.5 0 014 13.5v-7z" {...s} />
      <path d="M12 8.4l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8.8-1.9z" fill="currentColor" stroke="none" />
    </>
  ),
  // Social Media Marketing: Play-Button im Screen
  social: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="3" {...s} />
      <path d="M10.2 9.6l4.4 2.4-4.4 2.4V9.6z" fill="currentColor" stroke="none" />
      <path d="M7.2 10.5v3M17 10.5v3" {...s} opacity="0.45" />
    </>
  ),
  // Software Development: CPU-Chip
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" {...s} />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" {...s} opacity="0.5" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" {...s} />
    </>
  ),
  // Fallbacks fuer alte Keys
  video: (
    <>
      <rect x="3" y="5" width="13" height="14" rx="2" {...s} />
      <path d="M16 10l5-3v10l-5-3" {...s} />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" {...s} />
      <circle cx="12" cy="13.5" r="3.5" {...s} />
      <path d="M9 7l1.5-2.5h3L15 7" {...s} />
    </>
  ),
  palette: (
    <>
      <circle cx="12" cy="12" r="9" {...s} />
      <circle cx="8.5" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="10" r="1" fill="currentColor" stroke="none" />
      <path d="M12 21a4 4 0 004-4c0-2-1.5-3-2.5-4.5C12.5 11 12 9 12 9s-.5 2-1.5 3.5C9.5 14 8 15 8 17a4 4 0 004 4z" {...s} />
    </>
  ),
}
