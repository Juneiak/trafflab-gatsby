import * as React from "react"
import * as styles from './nav-list-element.module.css';
import { Link } from "gatsby";

export default function NavListElement({ text, linkTo }) {
  return (
    <li className={styles.listElement}>
      <Link
        to={linkTo}
        className={styles.link}
      >{text}</Link>
    </li>
  )
}