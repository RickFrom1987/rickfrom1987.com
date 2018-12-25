import React, { PropTypes } from 'react';
import MenuLayout from '../../components/Layout/MenuLayout';
import Link from '../../components/Link';
import Dog from '../../components/Dog';

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
    const itemStyle = {
      fontSize: 12,
    };
    return (
      <MenuLayout>
        <div style={homeStyle}>
          <Dog/>
        </div>
      </MenuLayout>
    );
  }

}

export default HomePage;
