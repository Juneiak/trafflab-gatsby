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

export default function BackgroundItems() {
  return (
    <div className={styles.backgroundItems}>
      <div className={styles.net1}><MediaImage image={netSvg} no480={true}/></div>
      <div className={styles.net2}><MediaImage image={netSvg} no480={true}/></div>
      <div className={styles.net3}><MediaImage image={netSvg} no480={true}/></div>
      <div className={styles.net4}><MediaImage image={netSvg} no480={true}/></div>

      <div className={styles.line1}><MediaImage image={lineToRight} image480={lineToRight_480}/></div>
      <div className={styles.line2}><MediaImage image={lineToLeft} image480={lineToLeft_480}/></div>
      <div className={styles.line3}><MediaImage image={lineToRight} image480={lineToRight_480}/></div>
      <div className={styles.line4}><MediaImage image={lineToLeft} image480={lineToLeft_480}/></div>

      <div className={styles.blurredBubble2}><MediaImage image={bubble2} image480={bubble2_480}/></div>
      <div className={styles.blurredBubble3}><MediaImage image={bubble3} image480={bubble3_480}/></div>
      <div className={styles.blurredBubble4}><MediaImage image={bubble4} image480={bubble4_480}/></div>
      <div className={styles.blurredBubble5}><MediaImage image={bubble5} image480={bubble5_480}/></div>
      <div className={styles.blurredBubble6}><MediaImage image={bubble6} image480={bubble6_480}/></div>

    </div>
  )
}