import * as React from "react"
import * as styles from './footer.module.css';
import Logo from '../../../components/common/logo/logo';
import NavList from '../../common/nav-list/nav-list';
import ContactsList from '../../common/contacts-list/contacts-list';
import CircledIconWrapper from '../../common/circled-icon-wrapper/circled-icon-wrapper';
import mailIcon from '../../../images/icons/mail.svg';
import skypeIcon from '../../../images/icons/skype.svg';
import { Is480Context, LangContext } from "../../../utils/contexts";

export default function Footer() {
  const is480 = React.useContext(Is480Context)
  const data = React.useContext(LangContext).footer;

  let year

  React.useEffect(() => {
    year = new Date().getFullYear();

  }, []);

  return (
    <footer id='contacts' className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoContainer}><Logo/></div>

        <div className={styles.navContainer}><NavList isFooter={true} /></div>
        <p className={styles.year}>{year}{data.yearText}</p>

        <div className={styles.contactsContainer}>
          <ContactsList intoRow={true} isSmall={is480} />
          <ul className={styles.otherContactslist}>

            <li className={styles.listEement}>
              <CircledIconWrapper isSmall={is480} icon={mailIcon} />
              <a href="mailto:admin@trafflab.com" className={styles.mailto}>admin@trafflab.com</a>
            </li>
            <li className={styles.listEement}>
              <CircledIconWrapper isSmall={is480} icon={skypeIcon} />
              <p className={styles.contact}>dmitry@trafflab.com</p>
            </li>

          </ul>
        </div>

      </div>
    </footer>
  )
}