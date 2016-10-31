import React, { PropTypes } from 'react';
import View from 'react-flexbox';
import HeaderLayout from '../../components/Layout/HeaderLayout';
import Link from '../../components/Link';
import s from './Contact.css';
import { title, phone, email } from './Contact.md';

import * as Colors from '../../components/Constants/Colors';

const documentTitle = 'RickFrom1987 - Contact';

class ContactPage extends React.Component {

  componentDidMount() {
    document.title = documentTitle;
  }

  render() {
    const homeStyle = {
      textAlign: 'center',
      color: Colors.WHITE,
    };
    const itemStyle = {
      fontSize: 24,
      padding: 6,
    };
    return (
      <HeaderLayout centered>
        <View column style={homeStyle}>
          <h1>{ title }</h1>
          <p style={itemStyle}>
            <i className="fa fa-envelope-o"></i><span style={{ marginLeft: 12 }}>{ email }</span>
          </p>
          <p style={itemStyle}>
            <i className="fa fa-phone"></i><span style={{ marginLeft: 12 }}>{ phone }</span>
          </p>
        </View>
      </HeaderLayout>
    );
  }

}

export default ContactPage;