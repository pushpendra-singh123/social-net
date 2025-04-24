const XSvg = (props) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 512 512"
    width="500"
    height="500"
    {...props}
  >
    <defs>
      <linearGradient id="gradTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A24FC7" />
        <stop offset="100%" stopColor="#6A1B9A" />
      </linearGradient>
      <linearGradient id="gradBottom" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1DE9B6" />
        <stop offset="100%" stopColor="#00ACC1" />
      </linearGradient>
    </defs>
    <path
      d="M256 64c-50 0-88 17-88 56 0 40 48 56 104 64 48 6 88 18 88 56 0 42-52 64-112 64-47 0-82-10-112-28l24 56c28 14 58 24 96 24 94 0 160-42 160-108 0-64-56-88-120-96-58-8-96-16-96-40 0-20 26-32 72-32 36 0 72 8 96 24l-24-56c-24-12-56-24-104-24z"
      fill="url(#gradTop)"
    />
    <path
      d="M256 448c50 0 88-17 88-56 0-40-48-56-104-64-48-6-88-18-88-56 0-42 52-64 112-64 47 0 82 10 112 28l-24-56c-28-14-58-24-96-24-94 0-160 42-160 108 0 64 56 88 120 96 58 8 96 16 96 40 0 20-26 32-72 32-36 0-72-8-96-24l24 56c24 12 56 24 104 24z"
      fill="url(#gradBottom)"
    />
  </svg>
);

export default XSvg;
