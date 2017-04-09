import React, { PropTypes } from 'react';
import View from 'react-flexbox';
import HeaderLayout from '../../components/Layout/HeaderLayout';
import Link from '../../components/Link';
import s from './Home.css';
import { title, desc } from './Home.md';

import * as Colors from '../../components/Constants/Colors';

const documentTitle = 'RickFrom1987';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = documentTitle;
  }

  render() {
    const homeStyle = {
      textAlign: 'center',
      color: Colors.WHITE,
    };
    const linkStyle = {
      fontSize: 16,
      padding: 12,
    };
    return (
      <HeaderLayout centered>
        <View column style={homeStyle}>
          <h1 style={{ fontSize: 60 }}>{ title }</h1>
          <p>{ desc }</p>
          <p>
            <a href="//www.facebook.com/rickfrom1987" style={linkStyle}><i className="fa fa-facebook"></i></a>
            <a href="//www.linkedin.com/in/rickfrom1987" style={linkStyle}><i className="fa fa-linkedin"></i></a>
            <a href="//github.com/rickfrom1987" style={linkStyle}><i className="fa fa-github"></i></a>
          </p>
        </View>
      </HeaderLayout>
    );
  }

}

export default HomePage;