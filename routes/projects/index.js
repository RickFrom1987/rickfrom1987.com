import React from 'react';
import { Layout, ProjectGridLayout } from '../../components';
import * as Colors from '../../components/constants/Colors';

function ProjectPage({ html }) {
  return (
    <Layout>
      <ProjectGridLayout/>
    </Layout>
  );
}

export default {

  path: '/projects',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const content = require('./index.md');
          resolve({
            title: content.title,
            component: ProjectPage,
            props: content,
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  },

};
