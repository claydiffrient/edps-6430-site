import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import styles from './index.module.css';

const Header = () => (
  <header id="header" className={styles.Header}>
    <h1 className={styles.Logo}>
      <Link className={styles.Link} to="/">
        Team Corrigan
      </Link>
    </h1>
    <nav className={styles.Nav} id="nav">
      <Link className={styles.Link} to="/weekly-journals">
        Weekly Journals
      </Link>
      <Link className={styles.Link} to="/project">
        Project
      </Link>
      <Link className={styles.Link} to="/team">
        Team Members
      </Link>
    </nav>
  </header>
);

const Footer = () => <footer className={styles.Footer} />;

const TemplateWrapper = ({ children }) => (
  <div className={styles.Container}>
    <Helmet title="ED PS 6430 - Fall 2017 - Team Corrigan" />
    <Header />
    <div className={styles.Content}>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
