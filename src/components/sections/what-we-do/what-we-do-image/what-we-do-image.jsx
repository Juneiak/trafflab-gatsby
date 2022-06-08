import * as React from "react"
import * as styles from './what-we-do-image.module.css';
import lottie from 'lottie-web';
import animation from '../../../../images/what-we-do/back.json';
import image from '../../../../images/what-we-do/what-we-do.png';
import image_480 from '../../../../images/what-we-do/what-we-do-480.png';
import MediaImage from "../../../ui/media-image/media-image";
import coin1 from '../../../../images/what-we-do/coin-1.png';
import coin2 from '../../../../images/what-we-do/coin-2.png';
import coin3 from '../../../../images/what-we-do/coin-3.png';


export default function WhatWeDoImage() {
  const lottieContainer = React.useRef()

  React.useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieContainer.current,
      animationData: animation,
      rendere: 'svg',
      loop: true,
      autoplay: true,

    })
    return () => anim.destroy()
  }, [lottieContainer])

  return (
    <div className={styles.imageContainer}>
      <div ref={lottieContainer} className={styles.lottieDiv} />
      <MediaImage image={image} image480={image_480}/>
      <div className={styles.coin1}><MediaImage image={coin1}/></div>
      <div className={styles.coin2}><MediaImage image={coin2}/></div>
      <div className={styles.coin3}><MediaImage image={coin3}/></div>

    </div>
  )
}