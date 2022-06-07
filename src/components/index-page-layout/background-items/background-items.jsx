import * as React from "react";
import * as styles from './background-items.module.css';

import netSvg from '../../../images/background-elements/net.svg';

import lineToRight from '../../../images/background-elements/line-to-right.svg';
import lineToLeft from '../../../images/background-elements/line-to-left.svg';
import lineToRight_480 from '../../../images/background-elements/line-to-right-480.svg';
import lineToLeft_480 from '../../../images/background-elements/line-to-left-480.svg';

import bubble2 from '../../../images/background-elements/blurred-circle-2.png'
import bubble3 from '../../../images/background-elements/blurred-circle-3.png'
import bubble4 from '../../../images/background-elements/blurred-circle-4.png'
import bubble5 from '../../../images/background-elements/blurred-circle-5.png'
import bubble6 from '../../../images/background-elements/blurred-circle-6.png'

import bubble2_480 from '../../../images/background-elements/blurred-circle-2-480.png'
import bubble3_480 from '../../../images/background-elements/blurred-circle-3-480.png'
import bubble4_480 from '../../../images/background-elements/blurred-circle-4-480.png'
import bubble5_480 from '../../../images/background-elements/blurred-circle-5-480.png'
import bubble6_480 from '../../../images/background-elements/blurred-circle-6-480.png'

import MediaImage from "../../ui/media-image/media-image";
import { LangContext } from "../../../utils/contexts";

export default function BackgroundItems() {
  const lang = React.useContext(LangContext).lang
  const langPrefix =  lang !== 'ru' ? lang : ''
  return (
    <div className={styles.backgroundItems}>
      <div className={`${styles.net1} ${styles['net1' + langPrefix]}`}><MediaImage image={netSvg} no480={true}/></div>
      <div className={`${styles.net2} ${styles['net2' + langPrefix]}`}><MediaImage image={netSvg} no480={true}/></div>
      <div className={`${styles.net3} ${styles['net3' + langPrefix]}`}><MediaImage image={netSvg} no480={true}/></div>
      <div className={`${styles.net4} ${styles['net4' + langPrefix]}`}><MediaImage image={netSvg} no480={true}/></div>

      <div className={`${styles.line1} ${styles['line1' + langPrefix]}`}><MediaImage image={lineToRight} image480={lineToRight_480}/></div>
      <div className={`${styles.line2} ${styles['line2' + langPrefix]}`}><MediaImage image={lineToLeft} image480={lineToLeft_480}/></div>
      <div className={`${styles.line3} ${styles['line3' + langPrefix]}`}><MediaImage image={lineToRight} image480={lineToRight_480}/></div>
      <div className={`${styles.line4} ${styles['line4' + langPrefix]}`}><MediaImage image={lineToLeft} image480={lineToLeft_480}/></div>
      
      <div className={`${styles.blurredBubble2} ${styles['blurredBubble2' + langPrefix]}`}><MediaImage image={bubble2} image480={bubble2_480}/></div>
      <div className={`${styles.blurredBubble3} ${styles['blurredBubble3' + langPrefix]}`}><MediaImage image={bubble3} image480={bubble3_480}/></div>
      <div className={`${styles.blurredBubble4} ${styles['blurredBubble4' + langPrefix]}`}><MediaImage image={bubble4} image480={bubble4_480}/></div>
      <div className={`${styles.blurredBubble5} ${styles['blurredBubble5' + langPrefix]}`}><MediaImage image={bubble5} image480={bubble5_480}/></div>
      <div className={`${styles.blurredBubble6} ${styles['blurredBubble6' + langPrefix]}`}><MediaImage image={bubble6} image480={bubble6_480}/></div>

    </div>
  )
}