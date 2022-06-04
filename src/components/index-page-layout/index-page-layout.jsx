import '../../styles/global.css';
import '@splidejs/react-splide/css/core';

import * as React from "react";
import * as styles from './index-page-layout.module.css';
import BackgroundItems from "./background-items/background-items";
import { Header, Footer, Opening  } from "../sections";
import FixedContacts from "../common/fixed-contacts/fixed-contacts";

export default function IndexPageLayout({ children, openFormPopupHandler }) {
  const headerRef = React.useRef();
  const smoothScrollToHeader = () => headerRef.current.scrollIntoView({behavior: 'smooth'});

  return (
    <div className={styles.page}>
      <BackgroundItems />
      
      <div className={styles.content}>
        
        <div className={styles.openingContainer}>
          <Header headerRef={headerRef} openFormPopupHandler={openFormPopupHandler}/>
          <Opening openFormPopupHandler={openFormPopupHandler} />
          <div className={styles.blurredBubble}></div>
        </div>

        <main className={styles.main}>
          { children }
        </main>
        
        <Footer />
        <FixedContacts scrollHandler={smoothScrollToHeader} />
      </div>

    </div>
  )
}