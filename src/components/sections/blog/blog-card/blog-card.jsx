import * as React from "react"
import * as styles from './blog-card.module.css';
import MediaImage from '../../../ui/media-image/media-image';

export default function BlogCard({ openHandler, data: { image, image480, title, texts, id }} ) {

  return (
    <article className={styles.card}>
      <button onClick={() => openHandler(String(id))} className={styles.button} type='button' >

        <div className={styles.imageContainer}><MediaImage image={image} image480={image480}/></div>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{texts[0].text}</p>
        </div>

      </button>
    </article>
  )
}