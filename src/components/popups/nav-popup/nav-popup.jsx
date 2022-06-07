import * as React from "react"
import * as styles from './nav-popup.module.css';
import PopupLayout from '../popup-layout/popup-layout'
import ContactsList from "../../common/contacts-list/contacts-list";
import Logo from "../../common/logo/logo";
import NavPopupElement from "./nav-popup-element/nav-popup-element";
import { LangContext } from "../../../utils/contexts";

export default function NavPopup({isOpen, closeHandler}) {
  const data = React.useContext(LangContext).navPopup;
  
  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
      <div className={styles.navPopup}>
        
        <button onClick={closeHandler} className={styles.closeButton} />
        <div className={styles.logoContainer}><Logo/></div>

        <div className={styles.content}>
          
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <NavPopupElement closeHandler={closeHandler} text={data.sources} linkTo='#sources' />
              <NavPopupElement closeHandler={closeHandler} text={data.ecosystem} linkTo='#ecosystem' />
              <NavPopupElement closeHandler={closeHandler} text={data.blog} linkTo='#blog' />
              <NavPopupElement closeHandler={closeHandler} text={data.partners} linkTo='#partners' />
              <NavPopupElement closeHandler={closeHandler} text={data.vacancies} linkTo='#vacancies' />
              <NavPopupElement closeHandler={closeHandler} text={data.contacts} linkTo='#contacts' />
            </ul>
          </nav>

          <div className={styles.contactsContainer}><ContactsList intoRow={true}/></div>

        </div>
      </div>
    </PopupLayout>

  )
}