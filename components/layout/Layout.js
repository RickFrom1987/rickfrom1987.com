import './Layout.css';
import React from 'react';
import Header from './Header';

import * as Colors from '../constants/Colors';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {style, ...props} = this.props;
    const baseStyle = {
      backgroundColor: Colors.BLUE,
      backgroundImage: Colors.GRADIENT_BG,
    };
    const layoutStyle = Object.assign({}, baseStyle, style);
    return (
      <div style={layoutStyle}>
        <Header />
        <main {...this.props}/>
      </div>
    );
  }
}

Layout.propTypes = {
  style: React.PropTypes.object,
};

export default Layout;
