import * as React from "react"
import * as styles from './opening.module.css';
import BasicButton from "../../ui/basic-button/basic-button";
import OpeningImage from "./opening-image/opening-image";

export default function Opening() {

  return (
    <section className={styles.opening}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>Профитная экосистема</h1>
          <p className={styles.subtitle}>для арбитражника любого уровня</p>
          <div className={styles.buttonContainer}>
            <BasicButton text='Стать партнером!'/>
          </div>
        </div>

      </div>
      <OpeningImage />
    </section>
  )
}