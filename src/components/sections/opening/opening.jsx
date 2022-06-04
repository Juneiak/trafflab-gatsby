import * as React from "react"
import * as styles from './opening.module.css';
import BasicButton from "../../ui/basic-button/basic-button";
import OpeningImage from "./opening-image/opening-image";
import useMediaMatch from "../../../hooks/use-media-match";

export default function Opening({openFormPopupHandler}) {
  const is480 = useMediaMatch('(max-width: 480px)');

  return (
    <section id='opening' className={styles.opening}>
      <div className={styles.content}>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>{is480 ? 'Лучшие условия' : 'Профитная экосистема'}</h1>
          <p className={styles.subtitle}>для арбитражника любого уровня</p>
          <div className={styles.buttonContainer}>
            <BasicButton handler={openFormPopupHandler} text={is480 ? 'Присоединиться' : 'Стать партнером!'}/>
          </div>
        </div>

      </div>
      <OpeningImage />
    </section>
  )
}