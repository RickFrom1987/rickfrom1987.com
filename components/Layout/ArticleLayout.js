import React from 'react';
import Dog from '../Dog';
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
      height: '100%',
      width: '100%',
      backgroundColor: Colors.WHITE,
      overflow: 'scroll',
    };
    const linkStyle = {
      fontSize: 24
    };
    const sectionStyle = {
      position: 'relative',
      margin: '0 auto',
      width: '95%',
    };
    const headerStyle = {
      ...sectionStyle,
      padding: 12,
    };
    const bodyStyle = {
      ...sectionStyle,
      padding: '0 24px',
    };
    const iconStyle = {
      width: 100,
    };
    const articleLayoutStyle = Object.assign({}, baseStyle, style);
    return (
      <div style={articleLayoutStyle}>
        <div style={headerStyle}>
          <div style={iconStyle}>
            <a href="/projects">
              <Dog/>
            </a>
          </div>
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
