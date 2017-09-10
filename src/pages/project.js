import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styles from './project.module.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className={styles.Container}>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .filter(post => post.node.frontmatter.path.indexOf('project') > -1)
        .map(({ node: post }) => {
          return (
            <div className={styles.Entry} key={post.id}>
              <h2 className={styles.Title}>
                <Link className={styles.Link} to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
              </h2>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query ProjectIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
