import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from '../bootstrap-grid.css';
import * as App from '../Constants/App';
import * as Colors from '../Constants/Colors';

class Header extends React.Component {
  render() {
    console.log('style',s);
    const logoStyle = {
      color: Colors.WHITE,
      height: App.HEADER_HEIGHT,
      lineHeight: App.HEADER_HEIGHT,
      whiteSpace: 'nowrap',
    };
    const headerStyle = {
      fontFamily: 'Montserrat',
      textTransform: 'uppercase',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1040,
      width: '100%',
      height: App.HEADER_HEIGHT,
      color: Colors.WHITE,
      backgroundColor: 'rgba(0,0,0, 0.5)',
      padding: '0 24px',
    };
    return (
      <div className={s['container-fluid']} style={headerStyle}>
        <div className={s.row}>
          <div className={`${s["col-md-3"]}`}>
            <a href="/" style={logoStyle}>RickFrom1987</a>
          </div>
          <div className={`${s["col-md-9s"]}`}>
            <Navigation/>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
