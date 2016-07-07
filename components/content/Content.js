import React from 'react';
import ArticleLayout from '../layout/ArticleLayout.js';

function Content({ title, subtitle, url, html }) {
  return (
    <ArticleLayout 
      title={title}
      subtitle={subtitle}
      url={url}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ArticleLayout>
  );
}

Content.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.any,
  url: React.PropTypes.string,
  html: React.PropTypes.string.isRequired,
};

export default Content;
