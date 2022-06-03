import * as React from "react";
import '../../styles/global.css';
import * as styles from './index-page-layout.module.css';
import BackgroundItems from "./background-items/background-items";
import { Header, Footer, Opening  } from "../sections";
import FixedContacts from "../common/fixed-contacts/fixed-contacts";

export default function IndexPageLayout({ children, openFormPopupHandler }) {

  return (
    <div className={styles.page}>
      <BackgroundItems />
      
      <div className={styles.content}>
        
        <div className={styles.openingContainer}>
          <Header openFormPopupHandler={openFormPopupHandler}/>
          <Opening openFormPopupHandler={openFormPopupHandler} />
          <div className={styles.blurredBubble}></div>
        </div>

        <main className={styles.main}>
          { children }
        </main>
        
        <Footer />
        <FixedContacts />
      </div>

    </div>
  )
}