import * as React from "react";
import * as styles from './background-items.module.css';
import netSvg from '../../../images/background-elements/net.svg';
import lineToRight from '../../../images/background-elements/line-to-right.svg';
import lineToLeft from '../../../images/background-elements/line-to-left.svg';
import bubble2 from '../../../images/background-elements/blurred-circle-2.png'
import bubble3 from '../../../images/background-elements/blurred-circle-3.png'
import bubble4 from '../../../images/background-elements/blurred-circle-4.png'
import bubble5 from '../../../images/background-elements/blurred-circle-5.png'
import bubble6 from '../../../images/background-elements/blurred-circle-6.png'

export default function BackgroundItems() {
  return (
    <div className={styles.backgroundItems}>
      <img src={netSvg} className={styles.net1} />
      <img src={bubble2} className={styles.blurredBubble2} />
      <img src={lineToRight} className={styles.line1} />

      <img src={lineToLeft} className={styles.line2} />
      <img src={bubble3} className={styles.blurredBubble3} />
      <img src={netSvg} className={styles.net2} />

      <img src={bubble4} className={styles.blurredBubble4} />
      <img src={lineToRight} className={styles.line3} />
      <img src={netSvg} className={styles.net3} />

      <img src={lineToLeft} className={styles.line4} />
      <img src={bubble5} className={styles.blurredBubble5} />
      <img src={netSvg} className={styles.net4} />
      <img src={bubble6} className={styles.blurredBubble6} />

    </div>
  )
}