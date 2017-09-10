import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styles from './team.module.css';

const TEAM = ['Lizz Corrigan', 'Kim Mahoney', 'Kyle Whittle', 'Clay Diffrient'];

export default function Index({ data }) {
  return (
    <div className={styles.Container}>
      {TEAM.map(member => (
        <div className={styles.Entry} key={member}>
          <h2 className={styles.Title}>{member}</h2>
        </div>
      ))}
    </div>
  );
}
