import * as React from "react"
import * as styles from './traffic-sources-card.module.css';

export default function TrafficSourcesCard({ image, title, isDownPosition }) {

  return (
    <li className={styles.listElement}>
      <article style={isDownPosition ? {alignItems: 'flex-end'} : {}} className={styles.card}>
        <div className={styles.content}>
          <img src={image} alt={`${title} icon`} className={styles.image} />
          <p className={styles.title}>{title}</p>
        </div>
      </article>
    </li>
  )
}