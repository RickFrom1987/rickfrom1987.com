import React, { PropTypes } from 'react';
import MenuLayout from '../../components/Layout/MenuLayout';
import s from './EmailSignature.css';
import { title, desc } from './EmailSignature.md';
import * as Colors from '../../components/Constants/Colors';

const documentTitle = 'RickFrom1987 - Email Signature';

class EmailSignaturePage extends React.Component {

  componentDidMount() {
    document.title = documentTitle;
  }

  render() {
    const EmailSignatureStyle = {
      textAlign: 'center',
      color: Colors.WHITE,
    };

    const iconStyle = {
      width: 24,
      height: 24,
      display: 'inline-block',
      margin: '0 2px'
    };

    const iconArr = [
      {
        href: 'https://www.facebook.com/haneen.licsw',
        src: 'https://haneenahmad.com/wp-content/uploads/2019/01/facebook_icon.png'
      },
      { 
        href: 'https://www.instagram.com/haneen.licsw',
        src: 'https://haneenahmad.com/wp-content/uploads/2019/01/instagram_icon.png'
      },
      { 
        href: 'https://www.pinterest.com/haneenlicsw',
        src: 'https://haneenahmad.com/wp-content/uploads/2019/01/pinterest_icon.png'
      } 
    ];

    const iconListHtml = iconArr.map((icon, i) => {
      return (
        <a href={icon.href} key={i} style={iconStyle}>
          <img src={icon.src} width={24} height={24}/>
        </a>
      );
    });

    return (
      <MenuLayout>
        <div style={EmailSignatureStyle}>
          <h2>{title}</h2>
          <p>{desc}</p>
          <div style={{ padding: 24, background: Colors.WHITE }}>
            &nbsp;{iconListHtml}&nbsp;
          </div>
        </div>
      </MenuLayout>
    );
  }

}

export default EmailSignaturePage;
