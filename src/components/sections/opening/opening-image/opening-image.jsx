import * as React from "react"
import * as styles from './opening-image.module.css';
import MediaImage from "../../../ui/media-image/media-image";
import image from '../../../../images/opening/opening.png';
import image480 from '../../../../images/opening/opening480.png';

export default function OpeningImage() {

  return (
    <div className={styles.imageContainer}>
      <MediaImage image={image} image480={image480} alt='lucky cat'/>
      <div className={styles.imageShadow}></div>
    </div>
  )
}