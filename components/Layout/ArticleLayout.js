import React from 'react';
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
      height: '100%',
      width: '100%',
    };
    const linkStyle = {
      fontSize: 24
    };
    const bodyStyle = {
      padding: 24,
      margin: '0 auto',
      marginTop: 100,
      maxWidth: 1024,
      width: '90%',
      backgroundColor: Colors.WHITE,
    };
    const articleLayoutStyle = Object.assign({}, baseStyle, style);
    return (
      <div style={articleLayoutStyle}>
        <Header/>
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
