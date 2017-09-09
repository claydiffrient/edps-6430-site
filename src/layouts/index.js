import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import styles from './index.css';

console.log(styles);

const Header = () => (
  <header id="header">
    <h1>
      <a href="index.html">Team Corrigan</a>
    </h1>
    <nav id="nav">
      <ul>
        <li>
          <Link to="/weekly_journals">Weekly Journals</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const bodyStyles = {
  display: 'grid',
};

const TemplateWrapper = ({ children }) => (
  <div className={styles.MainContainer} style={bodyStyles}>
    <Helmet title="ED PS 6430 - Fall 2017 - Team Corrigan" />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
