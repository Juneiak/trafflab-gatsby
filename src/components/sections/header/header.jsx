import * as React from "react"
import * as styles from './header.module.css';
import Logo from "../../common/logo/logo";
import NavList from "../../common/nav-list/nav-list";
import AskQuestion from "../../common/ask-question/ask-question";

export default function Header({ openFormPopupHandler, headerRef }) {

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <div className={styles.navContainer}><NavList /></div>
        <div className={styles.burgerContainer}>
          <AskQuestion openFormPopupHandler={openFormPopupHandler}/>
          <button type="button" className={styles.burgerButton}></button>
        </div>

      </div>
    </header>
  )
}