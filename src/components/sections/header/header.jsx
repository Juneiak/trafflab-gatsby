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
        <NavList />
        <AskQuestion openFormPopupHandler={openFormPopupHandler}/>
      </div>
    </header>
  )
}