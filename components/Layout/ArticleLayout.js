import React from 'react';
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
      paddingTop: 12,
      height: '100%',
      width: '100%',
    };
    const linkStyle = {
      fontSize: 24
    };
    const sectionStyle = {
      position: 'relative',
      margin: '0 auto',
      maxWidth: 768,
      width: '90%',
      backgroundColor: Colors.WHITE 
    };
    const headerStyle = {
      ...sectionStyle,
      marginTop: 60,
      padding: 24,
      paddingBottom: 0,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    };
    const bodyStyle = {
      ...sectionStyle,
      padding: 24,
      padingTop: 0,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginBottom: 60,
    };
    const imgStyle ={
      width: 100,
      height: 100,
      margin: '0 auto'
    };
    const articleLayoutStyle = Object.assign({}, baseStyle, style);
    return (
      <div style={articleLayoutStyle}>
        <div style={headerStyle}>
          <a href="/projects"><img src="/murphy.png" style={imgStyle}/></a>
        </div>
        <div style={bodyStyle}>
          <div>
            <h1 style={{ fontSize: 22, marginBottom: 12 }}>{title}</h1>
            <h2>{subtitle}</h2>
          </div>
          <div className={s.article}>
            { children }
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleLayout;
