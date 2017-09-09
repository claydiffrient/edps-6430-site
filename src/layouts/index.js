import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './styles/skel.css';
import './styles/style.css';
import './styles/style-xlarge.css';

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

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="ED PS 6430 - Fall 2017 - Team Corrigan" />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
