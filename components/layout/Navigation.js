
import React from 'react';
import { Link } from 'react-app';

import * as Colors from '../constants/Colors';

class Navigation extends React.Component {
  render() {
    const navStyle = {
      textAlign: 'right',
    };
    const linkStyle = {
      color: Colors.WHITE,
    }
    return (
      <nav style={navStyle}>
        <Link to="/projects" style={linkStyle}>
          <i className="fa fa-desktop"></i>
        </Link>
      </nav>
    );
  }

}

export default Navigation;
