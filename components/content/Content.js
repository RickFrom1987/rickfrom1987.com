import React from 'react';
import ArticleLayout from '../layout/ArticleLayout.js';

function Content({ title, html }) {
  return (
    <ArticleLayout title={title}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ArticleLayout>
  );
}

Content.propTypes = {
  title: React.PropTypes.string.isRequired,
  html: React.PropTypes.string.isRequired,
};

export default Content;
