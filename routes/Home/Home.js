import React, { PropTypes } from 'react';
import View from 'react-flexbox';
import HeaderLayout from '../../components/Layout/HeaderLayout';
import Link from '../../components/Link';
import s from './Home.css';
import { title, desc } from './Home.md';

import * as Colors from '../../components/Constants/Colors';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    const linkStyle = {
      fontSize: 24,
      padding: 12,
    };
    return (
      <HeaderLayout>
        <View column style={{ color: Colors.WHITE }}>
          <h1>{ title }</h1>
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


// import React from 'react';
// import View from 'react-flexbox';
// import { CenterLayout } from '../../components';

// import * as Colors from '../../components/constants/Colors';

// function HomePage({ html }) {
//   const linkStyle = {
//     fontSize: 24,
//     padding: 12,
//   };
//   return (
//     <CenterLayout style={{ color: Colors.WHITE }}>
//       <div column dangerouslySetInnerHTML={{ __html: html }}/>
//       <p>
//         <a href="//www.facebook.com/rickfrom1987" style={linkStyle}><i className="fa fa-facebook"></i></a>
//         <a href="//www.linkedin.com/in/rickfrom1987" style={linkStyle}><i className="fa fa-linkedin"></i></a>
//         <a href="//github.com/rickfrom1987" style={linkStyle}><i className="fa fa-github"></i></a>
//       </p>
//     </CenterLayout>
//   );
// }