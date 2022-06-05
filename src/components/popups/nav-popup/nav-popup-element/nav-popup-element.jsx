import * as React from "react"
import * as styles from './nav-popup-element.module.css';
import { Link } from "gatsby";

export default function NavPopupElement({ text, linkTo, closeHandler }) {
  
  return (
    <li onClick={closeHandler} className={styles.listElement}>
      <Link
        to={linkTo}
        className={styles.link}
      >{text}</Link>
    </li>
  )
}