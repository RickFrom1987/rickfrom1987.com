import React from 'react';
import View from 'react-flexbox';
import Header from './Header';
import * as Colors from '../constants/Colors';

class ArticleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { style, ...props } = this.props;
    const baseStyle = {
      border: '1px solid pink',
      height: '100%',
    };
    const headerStyle = {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 320,
      maxHeight: 480,
      color: Colors.WHITE,
    };
    const bodyStyle = {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    };
    const contentStyle = {
      width: '66%',
      maxWidth: 1024,
      minWidth: 320,
      padding: '24px 0',
    };
    const articleLayoutStyle = Object.assign({}, baseStyle, style);
    return (
      <View column style={articleLayoutStyle}>
        <Header />
        <View row style={headerStyle}>
          <h1>{ this.props.title }</h1>
        </View>
        <View row style={bodyStyle}>
          <div style={contentStyle}>
          { this.props.children }
          </div>
        </View>
      </View>
    );
  }
}

ArticleLayout.propTypes = {
  style: React.PropTypes.object,
  title: React.PropTypes.node,
};

export default ArticleLayout;
