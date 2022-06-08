import * as React from "react"
import * as styles from './opening-image.module.css';
import MediaImage from "../../../ui/media-image/media-image";
import image from '../../../../images/opening/opening-1.png';
import image480 from '../../../../images/opening/opening480-1.png';
import coin1 from '../../../../images/opening/coin-1.png';
import coin2 from '../../../../images/opening/coin-2.png';
import coin3 from '../../../../images/opening/coin-3.png';
import coin4 from '../../../../images/opening/coin-4.png';
import coin5 from '../../../../images/opening/coin-5.png';
import coin6 from '../../../../images/opening/coin-6.png';
import coin7 from '../../../../images/opening/coin-7.png';
import coin8 from '../../../../images/opening/coin-8.png';


import coin1_480 from '../../../../images/opening/coin480-1.png';
import coin2_480 from '../../../../images/opening/coin480-2.png';
import coin3_480 from '../../../../images/opening/coin480-3.png';
import coin4_480 from '../../../../images/opening/coin480-4.png';
import coin5_480 from '../../../../images/opening/coin480-5.png';
import coin6_480 from '../../../../images/opening/coin480-6.png';
import coin7_480 from '../../../../images/opening/coin480-7.png';
import coin8_480 from '../../../../images/opening/coin480-8.png';


export default function OpeningImage() {

  return (
    <div className={styles.imageContainer}>
      <MediaImage image={image} image480={image480} alt='lucky cat'/>
      <div className={styles.imageShadow}></div>
      <div className={styles.coin1}><MediaImage image={coin1} image480={coin1_480}/></div>
      <div className={styles.coin2}><MediaImage image={coin2} image480={coin2_480}/></div>
      <div className={styles.coin3}><MediaImage image={coin3} image480={coin3_480}/></div>
      <div className={styles.coin4}><MediaImage image={coin4} image480={coin4_480}/></div>
      <div className={styles.coin5}><MediaImage image={coin5} image480={coin5_480}/></div>
      <div className={styles.coin6}><MediaImage image={coin6} image480={coin6_480}/></div>
      <div className={styles.coin7}><MediaImage image={coin7} image480={coin7_480}/></div>
      <div className={styles.coin8}><MediaImage image={coin8} image480={coin8_480}/></div>
      <div className={styles.coin9}><MediaImage image={coin2} image480={coin2_480}/></div>


    </div>
  )
}