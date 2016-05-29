import React from 'react';
import View from 'react-flexbox';
import { CenterLayout } from '../../components';

import * as Colors from '../../components/constants/Colors';

function HomePage({ html }) {
  const linkStyle = {
    fontSize: 24,
    padding: 12,
  };
  return (
    <CenterLayout style={{ color: Colors.WHITE }}>
      <div column dangerouslySetInnerHTML={{ __html: html }}/>
      <p style={{ padding: 12 }}>
        <a href="//www.facebook.com/rickfrom1987" style={linkStyle}><i className="fa fa-facebook"></i></a>
        <a href="//www.linkedin.com/in/rickfrom1987" style={linkStyle}><i className="fa fa-linkedin"></i></a>
        <a href="//github.com/rickfrom1987" style={linkStyle}><i className="fa fa-github"></i></a>
      </p>
    </CenterLayout>
  );
}

HomePage.propTypes = {
  html: React.PropTypes.string.isRequired,
};

export default {

  path: '/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const content = require('./index.md');
          resolve({
            title: content.title,
            component: HomePage,
            props: content,
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  },

};
