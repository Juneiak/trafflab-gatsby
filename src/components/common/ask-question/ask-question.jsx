import * as React from "react"
import * as styles from './ask-question.module.css';
import { LangContext } from "../../../utils/contexts";
import LangList from '../lang-list/lang-list';

export default function AskQuestion({ openFormPopupHandler }) {
  const data = React.useContext(LangContext);
  
  return (
    <div className={styles.askQuestion}>
      <div style={{position: 'relative'}}>
        <p className={styles.workTime}>24<span style={{color: 'var(--color-gray-1)'}}>/7</span></p>
        <button onClick={openFormPopupHandler} className={styles.askButton}>{data.askQuestion}</button>
      </div>
      
      <div className={styles.langListContainer}><LangList /></div>
    </div>
  )
}