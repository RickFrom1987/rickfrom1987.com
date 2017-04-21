import React from 'react';
import history from '../core/history';

import s from './BrowserMock.css';

const PADDING = 12;

class BrowserMock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }
  static propTypes = {
    style: React.PropTypes.object,
    pathname: React.PropTypes.string,
    children: React.PropTypes.node
  };
  onMouseOver = () => {
    this.setState({
      hover: true,
    });
  }
  onMouseLeave = () => {
    this.setState({
      hover: false,
    });
  }
  onClick = () => {
    if (!this.props.pathname) {
      return;
    } else {
      window.setTimeout(() => {
        const pathname = this.props.pathname;
        history.push({
          pathname: pathname
        });
      }, 400);
    }
  }
  render() {
    const { pathname, style, ...props } = this.props;
    const browserMockStyle = {
      height: '100%',
      borderTop: '2em solid rgba(230, 230, 230, 0.7)',
      boxShadow: '0 0.1em 1em 0 rgba(0, 0, 0, 0.4)',
      position: 'relative',
      borderRadius: '3px 3px 0 0',
      transition: 'all 0.4s ease-out',
      cursor: 'pointer'
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
      textAlign: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      minWidth: 200,
      zIndex: 1000,
    };
    if (this.state.hover) {
      browserMockStyle.backgroundColor = 'rgba(0,0,0,0.25)';
    }
    const viewStyle = Object.assign({}, browserMockStyle, style);
    return (
      <div
        style={viewStyle}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
        className={s.ripple}>
        <div style={browserDotsStyle}></div>
        <div style={browserBodyStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default BrowserMock;
