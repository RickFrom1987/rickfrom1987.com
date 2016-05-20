import React from 'react';
import ReactDOM from 'react-dom';
import GridLayout from './GridLayout';

class ProjectGridLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: []
    };
  }
  
  trueOrFalse = () => {
    return (Math.random() < 0.5);
  }

  renderInitialLayout = () => {
    const projects = this.props.projects;
    const work = projects.work || null;
    return work.map((item, i) => {
      console.log('item', item, i);
      const COLS = 3;
      const HEIGHT = 8;
      return {
        i: i.toString(),
        x: (i % 3 === 0) ? 0 : i * 2,
        y: 0,
        w: 2,
        h: HEIGHT
      };
    });
    console.log("projects", projects);
  }

  onLayoutChange = (layout) => {
    this.setState({layout: layout});
  }

  render(){
    const initialLayout = this.renderInitialLayout();
    console.log("initialLayout", initialLayout);
    return (
      <GridLayout
        initialLayout={initialLayout}
        onLayoutChange={this.onLayoutChange}/>
    );
  }
}

ProjectGridLayout.propTypes = {
  projects: React.PropTypes.object.isRequired,
};

export default ProjectGridLayout;