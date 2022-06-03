import * as React from "react"
import * as styles from './nav-list.module.css';
import NavListElement from "./nav-list-element/nav-list-element";

export default function NavList({ isFooter=false }) {
  return (
    <nav className={styles.nav}>
      <ul style={{color: [isFooter ? 'var(--color-white)' : 'var(--color-gray-2)']}} className={styles.list}>
        <NavListElement text='Веб-мастер' linkTo='#web-master' isFooter={isFooter} />
        <NavListElement text='Эко-система' linkTo='#eco-system' isFooter={isFooter} />
        <NavListElement text='Блог' linkTo='#blog' isFooter={isFooter} />
        <NavListElement text='Партнёры' linkTo='#partners' isFooter={isFooter} />
        <NavListElement text='Вакансии' linkTo='#vacancies' isFooter={isFooter} />
        { !isFooter && <NavListElement text='Контакты' linkTo='#contacts' isFooter={isFooter} />}
      </ul>
    </nav>
  )
}