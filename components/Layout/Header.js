import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import Dog from '../Dog';
import * as App from '../Constants/App';
import * as Colors from '../Constants/Colors';

class Header extends React.Component {
  render() {
    const logoStyle = {
      color: Colors.WHITE,
      height: App.HEADER_HEIGHT,
      lineHeight: App.HEADER_HEIGHT,
      whiteSpace: 'nowrap',
      margin: '0 12px',
      fontWeight: 300,
      fontSize: 18
    };
    const headerStyle = {
      textTransform: 'uppercase',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1040,
      width: '100%',
      height: App.HEADER_HEIGHT,
      color: Colors.WHITE,
      backgroundColor: 'rgba(0,0,0, 0.5)',
    };
    return (
      <div className="container-fluid" style={headerStyle}>
        <div className="row">
          <Navigation/>
        </div>
      </div>
    );
  }

}

export default Header;
