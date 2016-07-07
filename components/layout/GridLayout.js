import React from 'react';
import _ from 'lodash';
import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

class GridLayout extends React.Component {

  static propTypes = {
    onLayoutChange: React.PropTypes.func.isRequired,
    items: React.PropTypes.object
  };

  static defaultProps = {
    className: 'layout',
    isDraggable: false,
    rowHeight: 30,
    cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
  };
  
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: 'lg'
    };
  }

  onBreakpointChange = (breakpoint) => {
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  render() {
    return (
      <ResponsiveReactGridLayout
        {...this.props}
        layouts={this.props.layouts}
        onBreakpointChange={this.onBreakpointChange}
        useCSSTransforms>
        {this.props.children}
      </ResponsiveReactGridLayout>
    );
  }
}

GridLayout.propTypes = {
  children: React.PropTypes.node,
};

export default GridLayout;