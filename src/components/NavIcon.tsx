export function NavIcon({ name }: { name: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.65" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      {name === 'Home' && <>
        <path d="m3.5 10 8.5-7 8.5 7" />
        <path d="M5.5 8.5v11a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1v-11" />
      </>}
      {name === 'About' && <>
        <circle cx="12" cy="7.5" r="3.5" />
        <path d="M5 20v-1a7 7 0 0 1 14 0v1" />
      </>}
      {name === 'Projects' && <>
        <path d="m14.5 6.5 3 3M4 20l8.5-8.5M5 4l5 5-2 2-5-5V3h3l5 5-2 2M14 14l6 6M13 17l4-4" />
        <path d="M14 10a5 5 0 0 1 6-6l-3 3 1 2 2 1 3-3a5 5 0 0 1-6 6" transform="translate(-1 0)" />
      </>}
      {name === 'Career' && <>
        <path d="m5 6 6 6-6 6M13 18h6" />
      </>}
    </svg>
  );
}
