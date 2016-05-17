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
  onLayoutChange = (layout) => {
    this.setState({layout: layout});
  };
  render(){
    console.log("PORJETCS", this.props.projects);
    return (
      <GridLayout onLayoutChange={this.onLayoutChange} items={this.props.projects}/>
    );
  }
}

ProjectGridLayout.propTypes = {
  projects: React.PropTypes.object.isRequired,
};

export default ProjectGridLayout;