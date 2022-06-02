import * as React from "react"
import * as styles from './ask-question.module.css';

export default function AskQuestion() {
  return (
    <div className={styles.askQuestion}>
      <p className={styles.workTime}>
        24<span style={{color: 'var(--color-gray-1)'}}>/7</span>
      </p>
      <button className={styles.askButton}>Задать вопрос</button>
    </div>
  )
}