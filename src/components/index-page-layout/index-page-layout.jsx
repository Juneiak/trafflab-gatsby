import '../../styles/global.css';
import '@splidejs/react-splide/css/core';

import * as React from "react";
import * as styles from './index-page-layout.module.css';
import BackgroundItems from "./background-items/background-items";
import { Header, Footer, Opening  } from "../sections";
import FixedContacts from "../common/fixed-contacts/fixed-contacts";
import MediaImage from '../ui/media-image/media-image';
import bubble1 from '../../images/background-elements/blurred-circle-1.png';
import bubble2_480 from '../../images/background-elements/blurred-circle-1-480.png';

export default function IndexPageLayout({ children, openFormPopupHandler }) {
  const headerRef = React.useRef();
  const smoothScrollToHeader = () => headerRef.current.scrollIntoView({behavior: 'smooth'});

  return (
    <div className={styles.page}>
      {/* <BackgroundItems /> */}
      
      <div className={styles.content}>
        
        <div className={styles.openingContainer}>
          <Header headerRef={headerRef} openFormPopupHandler={openFormPopupHandler}/>
          <Opening openFormPopupHandler={openFormPopupHandler} />
          <div className={styles.blurredBubbleContainer}><MediaImage image={bubble1} image480={bubble2_480}/></div>
        </div>

        <main className={styles.main}>
          { children }
        </main>
        
        {/* <Footer /> */}
        {/* <FixedContacts scrollHandler={smoothScrollToHeader} /> */}
      </div>

    </div>
  )
}