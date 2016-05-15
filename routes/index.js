
import home from './home';
import about from './about';
import projects from './projects';
import error from './error';

const routes = {

  path: '/',

  children: [
    home,
    about,
    projects,
    error,
  ],

};

export default routes;
