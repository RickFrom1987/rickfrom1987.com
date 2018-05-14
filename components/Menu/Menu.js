import React, { Component } from 'react'
import Link from '../Link';

import s from './Menu.css';

export class Menu extends Component {
  render() {
    return (
      <nav className={s.menu}>
        <input defaultChecked="checked" className={s.toggler} id="menu-toggler" type="checkbox" />
        <label htmlFor="menu-toggler"/>
        <ul>
          <li className={s.item}>
            <Link to="/contact">
              <i className="fa fa-phone"></i>
            </Link>
          </li>
          <li className={s.item}>
            <Link to="/projects">
              <i className="fa fa-desktop"></i>
            </Link>
          </li>
          <li className={s.item}>
            <a href="https://payments.rickfrom1987.com">
              <i className="fa fa-credit-card"></i>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Menu