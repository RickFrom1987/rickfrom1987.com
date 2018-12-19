import React from 'react';
import PropTypes from 'prop-types';
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
