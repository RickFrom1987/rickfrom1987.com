import './Layout.css';
import React from 'react';
import View from 'react-flexbox';
import Header from './Header';

import * as Colors from '../constants/Colors';

class CenterLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { style, ...props } = this.props;
    const baseStyle = {
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
    const centerLayoutStyle = Object.assign({}, baseStyle, style);
    return (
      <div>
        <Header />
        <View column style={centerLayoutStyle}>
          { this.props.children }
        </View>
      </div>
    );
  }
}

CenterLayout.propTypes = {
  style: React.PropTypes.object,
};

export default CenterLayout;
