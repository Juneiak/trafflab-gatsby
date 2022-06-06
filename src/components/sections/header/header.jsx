import * as React from "react"
import * as styles from './header.module.css';
import Logo from "../../common/logo/logo";
import NavList from "../../common/nav-list/nav-list";
import AskQuestion from "../../common/ask-question/ask-question";
import { Link } from "gatsby";

export default function Header({ openFormPopupHandler, headerRef, openNavPopupHandler }) {

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <div className={styles.navContainer}><NavList /></div>
        <div className={styles.burgerContainer}>
          <AskQuestion openFormPopupHandler={openFormPopupHandler}/>
          <button onClick={openNavPopupHandler} type="button" className={styles.burgerButton}></button>
        </div>

      </div>
      <div className={styles.langLinksContainer}>
        <Link className={styles.link} activeStyle={{display: 'none'}} to='/en/'>🇺🇸</Link>
        <Link className={styles.link} activeStyle={{display: 'none'}} to='/uk/'>🇺🇦</Link>
        <Link className={styles.link} activeStyle={{display: 'none'}} to='/ru'>🇷🇺</Link>
      </div>
    </header>
  )
}