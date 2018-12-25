import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import Dog from '../Dog';
import * as Colors from '../Constants/Colors';
import s from './Article.css';

class ArticleLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.node,
    subtitle: PropTypes.node,
    url: PropTypes.node,
  };
  
  render() {
    const { title, subtitle, url, children, style } = this.props;
    const baseStyle = {
      height: '100%',
      width: '100%',
      backgroundColor: Colors.WHITE,
      overflowY: 'scroll',
      WebkitOverflowScrolling: 'touch'
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
      display: 'block',
      width: 75,
      height: 'auto',
      margin: '12px 0'
    };
    const articleLayoutStyle = Object.assign({}, baseStyle, style);
    return (
      <div style={articleLayoutStyle}>
        <ReactTooltip />
        <div style={headerStyle}>
          <a href="/projects" style={iconStyle} data-tip="Back to projects">
            <Dog/>
          </a>
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
