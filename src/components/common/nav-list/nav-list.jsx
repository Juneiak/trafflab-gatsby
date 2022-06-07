import * as React from "react"
import * as styles from './nav-list.module.css';
import NavListElement from "./nav-list-element/nav-list-element";
import { LangContext } from "../../../utils/contexts";

export default function NavList({ isFooter=false }) {
  const data = React.useContext(LangContext).navList
  return (
    <nav className={styles.nav}>
      <ul style={{color: [isFooter ? 'var(--color-white)' : 'var(--color-gray-2)']}} className={styles.list}>
        <NavListElement text={data.sources} linkTo='#sources' isFooter={isFooter} />
        <NavListElement text={data.ecosystem} linkTo='#ecosystem' isFooter={isFooter} />
        <NavListElement text={data.blog} linkTo='#blog' isFooter={isFooter} />
        <NavListElement text={data.partners} linkTo='#partners' isFooter={isFooter} />
        <NavListElement text={data.vacancies} linkTo='#vacancies' isFooter={isFooter} />
        { !isFooter && <NavListElement text={data.contacts} linkTo='#contacts' isFooter={isFooter} />}
      </ul>
    </nav>
  )
}