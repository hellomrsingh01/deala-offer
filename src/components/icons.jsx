// Shared SVG icons, lifted verbatim from the mockup's inline paths.
// Stroke icons inherit `color`; fill icons default to currentColor too,
// so callers set the hue with CSS `color` (or an explicit prop).

function Stroke({ size = 16, width = 2, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

function Fill({ size = 12, children, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  )
}

export const PhoneIcon = (p) => (
  <Stroke {...p}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.73a16 16 0 006.29 6.29l1.25-1.25a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </Stroke>
)

export const UserIcon = (p) => (
  <Stroke {...p}>
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </Stroke>
)

export const ChevronDown = (p) => (
  <Stroke width={2.5} {...p}>
    <path d="M6 9l6 6 6-6" />
  </Stroke>
)

export const ChevronLeft = (p) => (
  <Stroke width={2.5} {...p}>
    <path d="M15 18l-6-6 6-6" />
  </Stroke>
)

export const ChevronRight = (p) => (
  <Stroke width={2.5} {...p}>
    <path d="M9 18l6-6-6-6" />
  </Stroke>
)

export const ArrowRight = (p) => (
  <Stroke width={2.5} {...p}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </Stroke>
)

export const MailIcon = (p) => (
  <Stroke {...p}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </Stroke>
)

export const SendIcon = (p) => (
  <Stroke width={2.5} {...p}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </Stroke>
)

export const ShareIcon = (p) => (
  <Stroke {...p}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </Stroke>
)

export const HeartIcon = (p) => (
  <Stroke {...p}>
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </Stroke>
)

export const ThumbsUp = (p) => (
  <Fill {...p}>
    <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" />
  </Fill>
)

export const ThumbsDown = (p) => (
  <Fill {...p}>
    <path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H10z" />
  </Fill>
)

export const CommentIcon = (p) => (
  <Stroke {...p}>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </Stroke>
)

export const BoltIcon = (p) => (
  <Fill {...p}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </Fill>
)

export const ClockIcon = (p) => (
  <Fill {...p}>
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
    <polyline points="12 6 12 12 16 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Fill>
)

export const ShieldIcon = (p) => (
  <Stroke {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Stroke>
)

export const StarIcon = (p) => (
  <Fill {...p}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </Fill>
)

export const FacebookIcon = (p) => (
  <Fill {...p}>
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </Fill>
)

export const TwitterIcon = (p) => (
  <Fill {...p}>
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </Fill>
)

export const InstagramIcon = (p) => (
  <Stroke {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </Stroke>
)
