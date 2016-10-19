import React from 'react';
import ArticleLayout from '../../components/Layout/ArticleLayout';
import { title, html } from './Datablade.md';

class DatabladePage extends React.Component {

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

export default DatabladePage;
