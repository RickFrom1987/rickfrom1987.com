import React from 'react';
import View from 'react-flexbox';

import * as Colors from './constants/Colors';

class BrowserMock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }
  _onMouseOver = () => {
    this.setState({
      hover: true,
    });
  }
  _onMouseLeave = () => {
    this.setState({
      hover: false,
    });
  }
  render() {
    const { style, ...props } = this.props;
    const browserMockStyle = {
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      borderTop: '2em solid rgba(230, 230, 230, 0.7)',
      boxShadow: '0 0.1em 1em 0 rgba(0, 0, 0, 0.4)',
      position: 'relative',
      borderRadius: '3px 3px 0 0',
      padding: 12,
      transition: 'all 0.4s ease-out',
    };
    const browserDotsStyle = {
      display: 'block',
      position: 'absolute',
      content: '',
      top: '-1.25em',
      left: '1em',
      width: '0.5em',
      height: '0.5em',
      borderRadius: '50%',
      backgroundColor: '#f44',
      boxShadow: '0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5',
    };
    const browserBodyStyle = {
      height: '100%',
      overflowY: 'hidden',
      justifyContent: 'center',
      alignItems: 'flex-start',
      minWidth: 200,
    };
    if (this.state.hover) {
      browserMockStyle.backgroundColor = 'rgba(0,0,0,0.25)';
    }
    return (
      <View {...props} 
        column
        style={browserMockStyle}
        onMouseOver={this._onMouseOver}
        onMouseLeave={this._onMouseLeave}>
        <div style={browserDotsStyle}></div>
        <View column style={browserBodyStyle}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

BrowserMock.propTypes = {
  style: React.PropTypes.object,
  children: React.PropTypes.node,
};

export default BrowserMock;
