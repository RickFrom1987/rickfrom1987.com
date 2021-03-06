import React, { PropTypes } from 'react';
import HeaderLayout from '../../components/Layout/HeaderLayout';
import ProjectGridLayout from '../../components/Layout/ProjectGridLayout';
import Link from '../../components/Link';
import s from './Projects.css';
import projects from './projects.json';

const title = 'RickFrom1987 - Projects';

class ProjectsPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <HeaderLayout>
        <ProjectGridLayout projects={projects}/>
      </HeaderLayout>
    );
  }

}

export default ProjectsPage;
