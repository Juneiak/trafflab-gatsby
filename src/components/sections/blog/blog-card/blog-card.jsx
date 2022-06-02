import * as React from "react"
import * as styles from './blog-card.module.css';
import Link from 'gatsby';

export default function BlogCard({ linkTo, image }) {

  return (
    <li className={styles.listElement}>
      <article className={styles.card}>
        <Link to={linkTo}>
          
        </Link>
      </article>
    </li>
  )
}