import * as React from "react"
import * as styles from './contacts-list.module.css';

import IconLink from "./icon-link/icon-link";
import tgImage from '../../../images/icons/telegram-2.svg';
import fbImage from '../../../images/icons/facebook-2.svg';
import ytImage from '../../../images/icons/youtube-2.svg';
import instImage from '../../../images/icons/instagram-2.svg';
import twitterImage from '../../../images/icons/twitter-2.svg';
import linkedinImage from '../../../images/icons/linkedin-2.svg';


export default function ContactsList({ intoRow, isSmall=false }) {
  return (
    <ul style={intoRow && {flexDirection: 'row', height: 'auto'}} className={styles.list}>
      <IconLink isSmall={isSmall} icon={tgImage} linkTo='https://t.me/trafflabmedia?utm_source=main+landing'/>
      <IconLink isSmall={isSmall} icon={fbImage} linkTo='https://www.facebook.com/profile.php?id=100081810532130'/>
      <IconLink isSmall={isSmall} icon={linkedinImage} linkTo='https://www.linkedin.com/feed/'/>
      <IconLink isSmall={isSmall} icon={ytImage} linkTo='https://www.youtube.com/channel/UC7nmSIXvOeGuFXxT3QsOaxQ'/>
      <IconLink isSmall={isSmall} icon={instImage} linkTo='https://www.instagram.com/traff.lab/?utm_source=main+landing'/>
      <IconLink isSmall={isSmall} icon={twitterImage} linkTo='https://twitter.com/traff_lab?utm_source=main+landing'/>
    </ul>
  )
}