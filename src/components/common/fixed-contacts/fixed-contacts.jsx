import * as React from "react"
import * as styles from './fixed-contacts.module.css';
import CircledIconWrapper from "../circled-icon-wrapper/circled-icon-wrapper";
import upArrowIcon from '../../../images/icons/arrow-up.svg'
import ContactsList from "../contacts-list/contacts-list";

export default function FixedContacts() {
  return (
    <div className={styles.fixedContacts}>
      <div className={styles.listContainer}>
        <ContactsList />
      </div>
      <div className={styles.upArrow}>
        <button className={styles.upButton}><CircledIconWrapper icon={upArrowIcon} /></button>  
        <span className={styles.upText}>Наверх</span>
      </div>
    </div>
  )
}