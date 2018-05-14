import React, { PropTypes } from 'react';
import Header from './Header';

function Layout(props) {
  return (
    <div>
      <Header/>
      <div {...props}/>
    </div>
  );
}

Layout.propTypes = { className: PropTypes.string };

export default Layout;
