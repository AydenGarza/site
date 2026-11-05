import { createRoot } from 'react-dom/client';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Career } from './pages/Career';
import { NavIcon } from './components/NavIcon';
import { ThemeToggle } from './components/ThemeToggle';
import './styles.css';

const pages = [
  { path: '/', label: 'Home', component: Home },
  { path: '/about', label: 'About', component: About },
  { path: '/projects', label: 'Projects', component: Projects },
  { path: '/career', label: 'Career', component: Career },
];

const path = window.location.pathname.replace(/\/+$/, '') || '/';
const page = pages.find((page) => page.path === path);
const Page = page?.component;

document.title = page ? `${page.label} | AJLG` : 'Page not found | AJLG';

createRoot(document.getElementById('root')!).render(
  <>
    <a className="skip-link" href="#content">Skip to content</a>
    <header className="nav-position">
      <nav className="glass-nav" aria-label="Main navigation">
        {pages.map(({ path: href, label }) => (
          <a className="nav-link" key={href} href={href}
            aria-label={label} aria-current={path === href ? 'page' : undefined}>
            <NavIcon name={label} />
            <span className="nav-label">{label}</span>
            <span className="nav-tooltip" aria-hidden="true">{label}</span>
          </a>
        ))}
      </nav>
    </header>
    <main id="content" tabIndex={-1}>{Page ? <Page /> : <h1>Page not found</h1>}</main>
    <ThemeToggle />
  </>,
);
