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

import { Is480Context } from '../../utils/contexts';
import useIs480 from '../../hooks/use-is-480';

export default function IndexPageLayout({ children, openFormPopupHandler, openNavPopupHandler }) {
  
  const headerRef = React.useRef();
  const is480 = useIs480()
  
  const smoothScrollToHeader = () => headerRef.current.scrollIntoView({behavior: 'smooth'});
  
  return (
    <>
      <Is480Context.Provider value={is480}>
        <div className={styles.page}>
          <BackgroundItems />
          
          <div className={styles.content}>
            
            <div className={styles.openingContainer}>
              <Header headerRef={headerRef} openNavPopupHandler={openNavPopupHandler} openFormPopupHandler={openFormPopupHandler}/>
              <Opening openFormPopupHandler={openFormPopupHandler} />
              <div className={styles.blurredBubbleContainer}><MediaImage image={bubble1} image480={bubble2_480}/></div>
            </div>

            <main className={styles.main}>
              { children }
            </main>
            
            <Footer />
            {!is480 && <FixedContacts scrollHandler={smoothScrollToHeader} />}
          </div>

        </div>
      </Is480Context.Provider>
    </>
  )
}