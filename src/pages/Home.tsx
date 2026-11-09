export function Home() {
  return (
    <section className="home-intro" aria-labelledby="intro-heading">
      <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder for Ayden Garza">
        <span aria-hidden="true">AG</span>
      </div>
      <h1 id="intro-heading">Hi, I'm Ayden,<br />and I'm a software engineer.</h1>
      <p className="intro-copy">
        I wanted to have a place where I could share highlights of my professional
        journey with the world, and as a lifelong computer nerd, it was only
        appropriate to make this site. Hope you stick around!
      </p>
      <div className="social-links" aria-label="Social profiles">
        <a href="https://www.linkedin.com/in/ayden-garza/" aria-label="Ayden Garza on LinkedIn"
          target="_blank" rel="noopener noreferrer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.75 1.36-1.55 2.79-1.55 2.99 0 3.58 1.97 3.58 4.53v5.27Z" />
          </svg>
        </a>
        <a href="https://github.com/AydenGarza" aria-label="Ayden Garza on GitHub"
          target="_blank" rel="noopener noreferrer">
          <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.68.08-.68 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.64 1.22 3.28.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98a4.36 4.36 0 0 1 1.16 3.03c0 4.32-2.63 5.28-5.14 5.56.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
