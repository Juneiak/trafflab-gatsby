import * as React from "react"
import * as styles from './nav-list-element.module.css';
import { Link } from "gatsby";

export default function NavListElement({ isFooter=false, text, linkTo }) {
  return (
    <li className={styles.listElement}>
      <Link
        style={isFooter ? {color: 'var(--color-white)'} : {}}
        to={linkTo}
        className={styles.link}
      >{text}</Link>
    </li>
  )
}