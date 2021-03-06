import React from 'react';
import PropTypes from 'prop-types';
import View from 'react-flexbox';

import ReactDOM from 'react-dom';
import GridLayout from './GridLayout';

import BrowserMock from '../BrowserMock';
import TagList from '../TagList';

class ProjectGridLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layouts:{ 
        lg: this.renderLargeLayout(),
        md: this.renderMediumLayout(),
        sm: this.renderSmallLayout(),
        xs: this.renderSmallLayout(),
        xxs: this.renderSmallLayout()
      }
    };
  }

  renderLargeLayout = () => {
    const work = this.props.projects || null;
    return work.map((item, i) => {
      const y = Math.ceil(Math.random() * 4) + 6;
      return {
        x: i * 3 % 12,
        y: Math.floor(i / 6) * y,
        w: 3,
        h: y,
        i: i.toString()
      };
    });
  }

  renderMediumLayout = () => {
    const work = this.props.projects || null;
    return work.map((item, i) => {
      const y = Math.ceil(Math.random() * 4) + 8;
      return {
        x: i * 5 % 10,
        y: Math.floor(i / 6) * y,
        w: 5,
        h: y,
        i: i.toString()
      };
    });
  }

  renderSmallLayout = () => {
    const work = this.props.projects || null;
    return work.map((item, i) => {
      const y = Math.ceil(Math.random() * 4) + 6;
      return {
        isDraggable: false,
        isResizable: false,
        x: i * 2 % 6,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString()
      };
    });
  }

  onLayoutChange = (layout) => {
    this.setState({layout: layout});
  }

  renderItems() {
    const projects = this.props.projects;
    const itemStyle = {
      color: 'white',
    };
    const linkStyle = {
      position: 'absolute',
      top: 0,
      right: 0,
      fontSize: 24,
      margin: 12,
    };
    return projects.map((item, i) => {
      return (
        <div key={i} style={itemStyle}>
          <BrowserMock pathname={item.url}>
            <h2>{item.company}</h2>
            <TagList tags={item.tags}/>
          </BrowserMock>
        </div>
      );
    });
  }

  render(){
    const { ...props } = this.props;
    return (
      <GridLayout
        { ...props }
        layouts={this.state.layouts}>
        {this.renderItems()}
      </GridLayout>
    );
  }
}

ProjectGridLayout.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectGridLayout;