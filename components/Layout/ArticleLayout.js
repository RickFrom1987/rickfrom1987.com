import React from 'react';
import View from 'react-flexbox';
import Header from './Header';
import s from './Layout.css';
import * as Colors from '../Constants/Colors';

class ArticleLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  static propTypes = {
    style: React.PropTypes.object,
    title: React.PropTypes.node,
    subtitle: React.PropTypes.node,
    url: React.PropTypes.node,
  };
  
  render() {
    const { title, subtitle, url, style, ...props } = this.props;
    const baseStyle = {
      height: '100%',
    };
    const headerStyle = {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50%',
      minHeight: 320,
      maxHeight: 580,
      color: Colors.WHITE,
      fontSize: 16,
    };
    const bodyStyle = {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    };
    const contentStyle = {
      width: '66%',
      maxWidth: 1024,
      minWidth: 248,
      padding: '48px 0',
    };
    const linkStyle = {
      fontSize: 24,
    };
    const articleLayoutStyle = Object.assign({}, baseStyle, style);
    return (
      <View column style={articleLayoutStyle}>
        <Header/>
        <View column style={headerStyle}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </View>
        <View row className={s.article} style={bodyStyle}>
          <div style={contentStyle}>
            { this.props.children }
          </div>
        </View>
      </View>
    );
  }
}

export default ArticleLayout;
