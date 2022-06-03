import * as React from "react"
import * as styles from './blog-card.module.css';
import MediaImage from '../../../ui/media-image/media-image';

export default function BlogCard({ openHandler, data: { image, title, text }} ) {

  return (
    <article className={styles.card}>
      <button onClick={openHandler} className={styles.button} type='button' >

        <div className={styles.imageContainer}><MediaImage image={image}/></div>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>

      </button>
    </article>
  )
}