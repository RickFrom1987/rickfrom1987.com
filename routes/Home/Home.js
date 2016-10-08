import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import s from './Home.css';

const title = 'React App Starter Kit';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1>Welcome!</h1>
        <p>
          To learn more visit project's <a href="https://github.com/kriasoft/react-app">homepage</a>
          , <Link to="/get-started">getting started</Link> guide,
          join <a href="https://gitter.im/kriasoft/react-app">#react-app</a> chat room on Gitter to
          stay up to date.
        </p>
        <h2>Recent Articles</h2>
        <ul>
          {this.props.articles.map((article, i) =>
            <li key={i}><a href={article.url}>{article.title}</a> by {article.author}</li>
          )}
        </ul>
      </Layout>
    );
  }

}

export default HomePage;
