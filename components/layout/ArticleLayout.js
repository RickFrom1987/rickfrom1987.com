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
    const { title, subtitle, url, style, ...props } = this.props;
    const baseStyle = {
      height: '100%',
    };
    const headerStyle = {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: '75%',
      minHeight: 320,
      maxHeight: 580,
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
      padding: '48px 0',
    };
    const articleLayoutStyle = Object.assign({}, baseStyle, style);
    return (
      <View column style={articleLayoutStyle}>
        <Header/>
        <View column style={headerStyle}>
          <h1>{ title }</h1>
          <h2><a href={url}>{url}</a> / { subtitle } </h2>
        </View>
        <View row className="article" style={bodyStyle}>
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
  subtitle: React.PropTypes.node,
  url: React.PropTypes.node,
};

export default ArticleLayout;
