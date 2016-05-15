import React from 'react';
import ReactDOM from 'react-dom';
import GridLayout from './GridLayout';

class ProjectGridLayout extends React.Component {
  state = {layout: []};

  onLayoutChange = (layout) => {
    this.setState({layout: layout});
  };

  stringifyLayout() {
    return this.state.layout.map(function(l) {
      return <div className="layoutItem" key={l.i}><b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]</div>;
    });
  }

  render(){
    return (
      <GridLayout onLayoutChange={this.onLayoutChange}/>
    );
  }
}

export default ProjectGridLayout;