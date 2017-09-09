import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

// import '../css/index.css'; // add some style if you want!

export default function Index({ data }) {
  return (
    <section id="banner">
      <h2>ED PS 6430 - Fall 2017</h2>
      <p>Team Corrigan Group Site</p>
    </section>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
