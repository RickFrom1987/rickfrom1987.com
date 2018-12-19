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
        <i className="fa fa-igloo"></i>
      </Link>
      <Link className={linkClass('/projects')} to="/projects">
        <i className="fa fa-desktop"></i>
      </Link>
      <a className={linkClass('/payment')} href="https://payments.rickfrom1987.com">
        <i className="fa fa-credit-card"></i>
      </a>
    </nav>
  );
}

export default Navigation;
