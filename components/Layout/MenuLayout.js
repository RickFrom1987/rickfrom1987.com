import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';

import * as Colors from '../Constants/Colors';

class MenuLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    centered: PropTypes.bool
  };

  render() {
    const { style, centered, children } = this.props;
    let centerStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      msTransform: 'translate(-50%, -50%)', /* IE 9 */
      WebkitTransform: 'translate(-50%, -50%)', /* Chrome, Safari, Opera */
      minWidth: 300,
      maxWidth: 768,
    }
    return (
      <div>
        <Menu/>
        <div style={centerStyle}>
          {children}
        </div>
      </div>
    );
  }
}

export default MenuLayout;
