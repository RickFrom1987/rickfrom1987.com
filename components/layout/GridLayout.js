import React from 'react';
import _ from 'lodash';
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

function generateLayout() {
  return _.map(_.range(0, 25), function (item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: _.random(0, 5) * 2 % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05
    };
  });
}

class GridLayout extends React.Component {

  static propTypes = {
    onLayoutChange: React.PropTypes.func.isRequired,
    items: React.PropTypes.object
  };

  static defaultProps = {
    className: 'layout',
    rowHeight: 30,
    cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
  };
  
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: 'lg',
      mounted: true,
    };
  }

  onBreakpointChange = (breakpoint) => {
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  onLayoutChange = (layout, layouts) => {
    this.props.onLayoutChange(layout, layouts);
  };

  render() {
    return (
      <ResponsiveReactGridLayout
        {...this.props}
        layouts={this.props.layouts}
        onBreakpointChange={this.onBreakpointChange}
        onLayoutChange={this.onLayoutChange}
        useCSSTransforms={this.state.mounted}>
        {this.props.children}
      </ResponsiveReactGridLayout>
    );
  }
}

GridLayout.propTypes = {
  children: React.PropTypes.node,
};

export default GridLayout;