import * as React from "react"
import * as styles from './page-form.module.css';
import { Is480Context } from "../../../utils/contexts";

import MediaImage from "../../ui/media-image/media-image";
import image from '../../../images/page-form/page-form.png';
import image480 from '../../../images/page-form/page-form480.png';
import BasicInput from "../../ui/basic-input/basic-input";
import ArrowButton from "../../ui/arrow-button/arrow-button";
import BasicButton from "../../ui/basic-button/basic-button";;

export default function PageForm() {

  const [ nameValue, setNamavalue ] = React.useState('')
  const [ tgValue, setTgvalue ] = React.useState('')
  
  const is480 = React.useContext(Is480Context)

  const handleInputChange = ( setStateFunc ) => (evt) => setStateFunc(evt.target.value);
  
  return (
    <section className={styles.pageForm}>
      <div className={styles.content}>

        <div className={styles.formContainer}>
          <div className={styles.textSvg} />
          <p className={styles.text}>Оставьте заявку и менеджер свяжется с вами в ближайшее время</p>
          <form className={styles.form}>
            <BasicInput placeholder='Имя' value={nameValue} onChange={handleInputChange(setNamavalue)} />
            <BasicInput placeholder='Telegram' value={tgValue} onChange={handleInputChange(setTgvalue)} />
            {is480
              ? <BasicButton text='Присоединиться' handler={() => false} />
              : <ArrowButton direction='right' handler={() => false}/>
            }
          </form>
        </div>

        <div className={styles.imageContainer}>
          <MediaImage image={image} image480={image480} />
        </div>

      </div>

    </section>
  )
}