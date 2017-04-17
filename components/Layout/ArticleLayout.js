import React from 'react';
import View from 'react-flexbox';
import Header from './Header';
import * as Colors from '../Constants/Colors';
import s from './Article.css';

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
    const { title, subtitle, url, children, style } = this.props;
    const baseStyle = {
      paddingTop: 50,
      minHeight: '100%',
      width: '100%',
    };
    const linkStyle = {
      fontSize: 24
    };
    let leftStyle;
    let rightStyle;
    if (window.innerWidth > 480) {
      baseStyle.flexFlow = 'row';
      leftStyle = {
        flexShrink: 0,
        flexGrow: 0,
        height: '100%',
        width: 200,
        color: Colors.WHITE,
        alignItems: 'center',
      };
      rightStyle = {
        marginLeft: 'auto',
        flex: '0 1 auto',
        padding: 24,
        backgroundColor: 'white'
      };
    } else {
      baseStyle.flexFlow = 'column';
      leftStyle = {
        color: Colors.WHITE,
        alignItems: 'flex-start',
      };
      rightStyle = {
        backgroundColor: Colors.WHITE,
        padding: 24,
      };
    }
    const articleLayoutStyle = Object.assign({}, baseStyle, style);
    return (
      <View row style={articleLayoutStyle}>
        <Header/>
        <View column style={leftStyle}>
          <div style={{ padding: 24 }}>
            <h1 style={{ fontSize: 22 }}>{title}</h1>
            <h2>{subtitle}</h2>
            <p><a href={url}>View Project</a></p>
          </div>
        </View>
        <View column style={rightStyle} className={s.article}>
            { children }
        </View>
      </View>
    );
  }
}

export default ArticleLayout;
