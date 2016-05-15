import './Layout.css';
import React from 'react';
import Header from './Header';

class Layout extends React.Component {
  render() {
    return (
      <div ref="root">
        <Header />
        <main {...this.props}/>
      </div>
    );
  }
}

export default Layout;
