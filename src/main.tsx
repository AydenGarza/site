import { createRoot } from 'react-dom/client';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Career } from './pages/Career';

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
    <nav aria-label="Main navigation">
      {pages.map(({ path: href, label }, index) => (
        <span key={href}>
          {index > 0 && ' · '}
          <a href={href} aria-current={path === href ? 'page' : undefined}>
            {label}
          </a>
        </span>
      ))}
    </nav>
    <main>{Page ? <Page /> : <h1>Page not found</h1>}</main>
  </>,
);
