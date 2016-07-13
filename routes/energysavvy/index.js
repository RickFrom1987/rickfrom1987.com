import { Content } from '../../components';

export default {

  path: '/energysavvy',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const content = require('./index.md');
          resolve({
            title: content.title,
            subtitle: content.subtitle,
            component: Content,
            props: content,
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  },

};
