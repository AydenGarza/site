import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    'content', theme === 'dark' ? '#111218' : '#f7f8fa',
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(
    () => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  );

  useEffect(() => {
    const system = window.matchMedia('(prefers-color-scheme: dark)');
    const sync = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem('ajlg-theme'); } catch {}
      const next = saved === 'dark' || saved === 'light'
        ? saved : system.matches ? 'dark' : 'light';
      applyTheme(next);
      setTheme(next);
    };
    system.addEventListener('change', sync);
    window.addEventListener('storage', sync);
    return () => {
      system.removeEventListener('change', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
    setTheme(next);
    try { localStorage.setItem('ajlg-theme', next); } catch {}
  }

  const label = `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`;

  return (
    <button className="theme-toggle" type="button" onClick={toggle}
      aria-label={label} title={label}>
      <svg className="theme-icon theme-moon" width="21" height="21" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <path d="M20.5 13.3A8.7 8.7 0 0 1 10.7 3.5a8.7 8.7 0 1 0 9.8 9.8Z" />
      </svg>
      <svg className="theme-icon theme-sun" width="21" height="21" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
        aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
      </svg>
    </button>
  );
}
