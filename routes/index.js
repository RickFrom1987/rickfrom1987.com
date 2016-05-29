
import home from './home';
import about from './about';
import projects from './projects';
import error from './error';

const routes = [
  home,
  projects,
  { 
    path: '/0/*', 
    action({ history }) {
      return new Promise((resolve, reject) => {
        window.location = window.location.href.replace('/0','');
      });
    } 
  }
];

export default routes;
