import * as React from "react"
import * as styles from './arrow-button.module.css';

export default function ArrowButton({ isActive=true, handler }) {
  return (
    <button
      className={styles.button}
      disabled={!isActive}
      onClick={handler}
      type='button'
    >
      <div className={styles.icon}></div>
    </button>
  )
}