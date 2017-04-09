import React from 'react';
import View from 'react-flexbox';
import Header from './Header';

import * as Colors from '../Constants/Colors';

class HeaderLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    centered: React.PropTypes.bool
  };

  render() {
    const { style, centered, ...props } = this.props;
    const layoutStyle = {
      paddingTop: 48
    };

    let centerStyle;
    if (centered) {
      centerStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        minWidth: 300,
        maxWidth: 768,
      };
    }

    return (
      <View column style={layoutStyle}>
        <Header />
        <View column {...props} style={centerStyle}/>
      </View>
    );
  }
}

export default HeaderLayout;
