
import home from './home';
import about from './about';
import projects from './projects';
import error from './error';

const routes = [
  home,
  projects,
  { 
    path: '*', 
    action({ history }) {
      return new Promise((resolve, reject) => {
        const pathname = window.location.pathname;
        const isRedirect = (pathname.indexOf('/0/') === 0);
        if (!isRedirect) {
          return history.push('/');
        } else {
          const redirectPath = pathname.replace('0/', '');
          return history.push(redirectPath);
        }
      });
    } 
  }
];

export default routes;
