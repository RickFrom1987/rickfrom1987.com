import React from 'react';
import { CenterLayout } from '../../components';

import * as Colors from '../../components/constants/Colors';

function HomePage({ html }) {
  return (
    <CenterLayout>
      <div style={{ color: Colors.WHITE }} dangerouslySetInnerHTML={{ __html: html }}/>
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
