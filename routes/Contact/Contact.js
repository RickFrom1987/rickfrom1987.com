import React, { PropTypes } from 'react';
import View from 'react-flexbox';
import MenuLayout from '../../components/Layout/MenuLayout';
import Link from '../../components/Link';
import Dog from '../../components/Dog';
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
    const itemStyle = {
      fontSize: 16,
    };
    return (
      <MenuLayout>
        <div style={contactStyle}>
          <Dog/>
          <p style={itemStyle}>
            <i className="fa fa-envelope"></i><span style={{ marginLeft: 8 }}>{ email }</span>
          </p>
          <p style={itemStyle}>
            <i className="fa fa-phone"></i><span style={{ marginLeft: 8 }}>{ phone }</span>
          </p>
        </div>
      </MenuLayout>
    );
  }

}

export default ContactPage;