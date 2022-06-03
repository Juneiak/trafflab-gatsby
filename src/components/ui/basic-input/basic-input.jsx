import * as React from "react"
import * as styles from './basic-input.module.css';

export default function BasicInput({
  placeholder,
  value,
  type = 'text',
  onChange,
}) {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}