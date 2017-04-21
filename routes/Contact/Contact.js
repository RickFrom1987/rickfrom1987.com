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
    const contactStyle = {
      textAlign: 'center',
      color: Colors.WHITE,
    };
    const imgStyle = {
      width: 200,
      height: 200
    };
    const itemStyle = {
      fontSize: 16,
    };
    return (
      <HeaderLayout centered>
        <div style={contactStyle}>
          <img src="/murphy.png" style={imgStyle}/>
          <h1 style={{ fontSize: 32 }}>{ title }</h1>
          <p style={itemStyle}>
            <i className="fa fa-envelope-o"></i><span style={{ marginLeft: 12 }}>{ email }</span>
          </p>
          <p style={itemStyle}>
            <i className="fa fa-phone"></i><span style={{ marginLeft: 12 }}>{ phone }</span>
          </p>
        </div>
      </HeaderLayout>
    );
  }

}

export default ContactPage;