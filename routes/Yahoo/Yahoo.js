import React from 'react';
import ArticleLayout from '../../components/Layout/ArticleLayout';
import { title, html } from './Yahoo.md';

class YahooPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <ArticleLayout title={title}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </ArticleLayout>
    );
  }

}

export default YahooPage;
