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
    initialLayout: generateLayout()
  };
  
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: 'lg',
      mounted: true,
      layouts: {lg: this.props.initialLayout},
    };
  }

  generateDOM() {
    const gridItemStyle = {
      backgroundColor: 'pink',
    };
    return _.map(this.state.layouts.lg, function (l, i) {
      return (
        <div key={i} style={gridItemStyle} className={l.static ? 'static' : ''}>
          {l.static ?
            <span className="text" title="This item is static and cannot be removed or resized.">Static - {i}</span>
            : <span className="text">{i} Test</span>
          }
        </div>);
    });
  }

  onBreakpointChange = (breakpoint) => {
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  onLayoutChange = (layout, layouts) => {
    this.props.onLayoutChange(layout, layouts);
  };

  onNewLayout = () => {
    this.setState({
      layouts: {lg: generateLayout()}
    });
  };

  render() {
    return (
      <div>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          measureBeforeMount={false}
          useCSSTransforms={this.state.mounted}>
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default GridLayout;