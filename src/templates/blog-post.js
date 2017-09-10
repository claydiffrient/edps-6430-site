import React from 'react';
import Helmet from 'react-helmet';
import styles from './styles.module.css';

export default function Template({ data }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className={styles.Container}>
      <Helmet title={`Team Corrigan - ${post.frontmatter.title}`} />
      <div className={styles.Post}>
        <h1 className={styles.Title}>{post.frontmatter.title}</h1>
        <div
          className={styles.Content}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
