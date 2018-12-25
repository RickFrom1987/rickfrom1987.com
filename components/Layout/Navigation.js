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
      <Link className={linkClass('/contact')} to="/contact">
        <i className="fa fa-phone"></i>
      </Link>
      <a className={linkClass('/payment')} target="_blank" href="//payments.rickfrom1987.com">
        <i className="fa fa-credit-card"></i>
      </a>
    </nav>
  );
}

export default Navigation;
