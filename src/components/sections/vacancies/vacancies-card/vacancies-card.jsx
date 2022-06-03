import * as React from "react"
import * as styles from './vacancies-card.module.css';

export default function VacanciesCard({handler, data: {status, speciality, experience, about}}) {

  return (
    <article className={styles.card}>
      <div className={styles.textContainer}>
        <p className={styles.status}>{status}</p>
        <p className={styles.speciality}>{speciality}</p>
        <p className={styles.experience}>{`Опыт: ${experience}`}</p>
        <p className={styles.about}>{about}</p>
      </div>
      <button className={styles.button} onClick={handler} type='button'>Подробнее</button>
    </article>
  )
}