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
          <div className={s.dog}>
            <Dog/>
          </div>
        </div>
      </MenuLayout>
    );
  }

}

export default HomePage;
