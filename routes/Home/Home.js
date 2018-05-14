import React, { PropTypes } from 'react';
import MenuLayout from '../../components/Layout/MenuLayout';
import Link from '../../components/Link';
import Dog from '../../components/Dog';
import s from './Home.css';
import { title, desc } from './Home.md';

import * as Colors from '../../components/Constants/Colors';

const documentTitle = 'RickFrom1987';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = documentTitle;
  }

  _renderFooter() {
    return (
      <p>
        <a href="//www.facebook.com/rickfrom1987" style={linkStyle}><i className="fa fa-facebook"></i></a>
        <a href="//www.linkedin.com/in/rickfrom1987" style={linkStyle}><i className="fa fa-linkedin"></i></a>
        <a href="//github.com/rickfrom1987" style={linkStyle}><i className="fa fa-github"></i></a>
      </p>
    );
  }

  render() {
    const homeStyle = {
      textAlign: 'center',
      color: Colors.WHITE,
    };
    const imgStyle = {
      width: 300,
      height: 300
    };
    const linkStyle = {
      fontSize: 18,
      padding: 12,
    };
    return (
      <MenuLayout>
        <div style={homeStyle}>
          <Dog/>
          <h1 style={{ fontSize: 70 }}>{ title }</h1>
        </div>
      </MenuLayout>
    );
  }

}

export default HomePage;
