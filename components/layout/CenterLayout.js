import './Layout.css';
import React from 'react';
import View from 'react-flexbox';
import Header from './Header';

import * as Colors from '../constants/Colors';

class CenterLayout extends React.Component {
  render() {
    const centerLayoutStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      textAlign: 'center',
      backgroundColor: Colors.BLUE,
      backgroundImage: Colors.GRADIENT_BG,
    };
    return (
      <div>
        <Header />
        <View column style={centerLayoutStyle} {...this.props}/>
      </div>
    );
  }
}

export default CenterLayout;
