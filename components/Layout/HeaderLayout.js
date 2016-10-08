import React from 'react';
import Header from './Header';

import * as Colors from '../Constants/Colors';

class HeaderLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {style, ...props} = this.props;
    let layoutStyle;
    if (this.props.hasHeader) {
      layoutStyle = {
        paddingTop: 48,
      }
    }
    return (
      <div style={layoutStyle}>
        <Header />
        <main {...this.props}/>
      </div>
    );
  }
}

HeaderLayout.propTypes = {
  style: React.PropTypes.object,
};

export default HeaderLayout;
