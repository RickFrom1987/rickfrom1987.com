import React from 'react';
import Header from './Header';
import s from './Layout.css';

import * as Colors from '../Constants/Colors';

class HeaderLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {style, ...props} = this.props;
    const layoutStyle = {
      paddingTop: 48
    };
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
