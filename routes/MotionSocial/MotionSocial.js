import React from 'react';
import ArticleLayout from '../../components/Layout/ArticleLayout';
import { title, url, html } from './MotionSocial.md';

class MotionSocialPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <ArticleLayout title={title} url={url}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </ArticleLayout>
    );
  }

}

export default MotionSocialPage;
