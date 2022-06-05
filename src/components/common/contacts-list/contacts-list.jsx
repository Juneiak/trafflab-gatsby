import * as React from "react"
import * as styles from './contacts-list.module.css';
import IconLink from "./icon-link/icon-link";
import tgImage from '../../../images/icons/telegram-2.svg';
import fbImage from '../../../images/icons/facebook-2.svg';
import ytImage from '../../../images/icons/youtube-2.svg';
import instImage from '../../../images/icons/instagram-2.svg';
import twitterImage from '../../../images/icons/twitter-2.svg';

export default function ContactsList({ intoRow, isSmall }) {
  return (
    <ul style={intoRow && {flexDirection: 'row', height: 'auto'}} className={`${styles.list} ${isSmall ? styles.isSmall : ''}`}>
      <IconLink isSmall={isSmall} icon={tgImage} linkTo='https://web.telegram.org/k/'/>
      <IconLink isSmall={isSmall} icon={fbImage} linkTo='https://ru-ru.facebook.com'/>
      <IconLink isSmall={isSmall} icon={ytImage} linkTo='https://www.youtube.com/'/>
      <IconLink isSmall={isSmall} icon={instImage} linkTo='https://www.instagram.com'/>
      <IconLink isSmall={isSmall} icon={twitterImage} linkTo='https://twitter.com'/>
    </ul>
  )
}