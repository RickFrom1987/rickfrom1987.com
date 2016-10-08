import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link className={s.title} to="/">
          RickFrom1987
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
