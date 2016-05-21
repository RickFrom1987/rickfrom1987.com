import React from 'react';
import View from 'react-flexbox';
import ReactDOM from 'react-dom';
import GridLayout from './GridLayout';

class ProjectGridLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layouts: this.renderLayouts()
    };
  }

  renderLayouts = () => {
    const layouts = {
      lg: this.renderLargeLayout(),
      md: this.renderMediumLayout(),
      sm: this.renderSmallLayout(),
      xs: this.renderSmallLayout(),
      xxs: this.renderSmallLayout()
    };
    return layouts;
  }

  renderLargeLayout = () => {
    const work = this.props.projects.work || null;
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
    const work = this.props.projects.work || null;
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
    const work = this.props.projects.work || null;
    return work.map((item, i) => {
      const y = Math.ceil(Math.random() * 4) + 6;
      return {
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
    const work = projects.work || null;
    const gridItemStyle = {
      backgroundColor: 'pink',
      padding: 12
    };
    const previewStyle = {
      backgroundColor: 'green',
      height: '60%'
    };
    const detailsStyle = {
      height: '40%',
    };
    console.log('Work', work);
    return work.map((item, i) => {
      return (
        <View column key={i} style={gridItemStyle}>
          <View style={previewStyle}>
            {item.thumbnail}
          </View>
          <View style={detailsStyle}>
            {item.company}
            {item.position}
            {item.website}
          </View>
        </View>
      );
    });
  }

  render(){
    const { ...props } = this.props;
    return (
      <GridLayout
        { ...props }
        layouts={this.state.layouts}
        onLayoutChange={this.onLayoutChange}>
        {this.renderItems()}
      </GridLayout>
    );
  }
}

ProjectGridLayout.propTypes = {
  projects: React.PropTypes.object.isRequired,
};

export default ProjectGridLayout;