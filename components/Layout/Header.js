import React from 'react';
import View from 'react-flexbox';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';

import * as App from '../Constants/App';
import * as Colors from '../Constants/Colors';

class Header extends React.Component {
  render() {
    const logoStyle = {
      color: Colors.WHITE,
    };
    const headerStyle = {
      fontFamily: 'Montserrat',
      textTransform: 'uppercase',
      justifyContent: 'space-between',
      alignItems: 'center',
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
      <View row style={headerStyle}>
        <a href="/" style={logoStyle}>RickFrom1987</a>
        <Navigation/>
      </View>
    );
  }

}

export default Header;
