import React from 'react';
import history from '../../core/history';
import Link from '../Link';
import s from './Navigation.css';

function Navigation() {
  const path = history.getCurrentLocation().pathname;
  const linkClass = href => `${s.link}${path === href ? ` ${s.active}` : ''}`;
  return (
    <nav className={s.nav}>
      <Link className={linkClass('/')} to="/">
        Home
      </Link>
      <Link className={linkClass('/projects')} to="/projects">
        Projects
      </Link>
    </nav>
  );
}

export default Navigation;
