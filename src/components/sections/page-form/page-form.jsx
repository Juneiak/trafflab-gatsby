import * as React from "react"
import * as styles from './page-form.module.css';
import MediaImage from "../../ui/media-image/media-image";
import image from '../../../images/page-form/page-form.png';
import image480 from '../../../images/page-form/page-form480.png';
import BasicInput from "../../ui/basic-input/basic-input";
import ArrowButton from "../../ui/arrow-button/arrow-button";

export default function PageForm() {

  const [ nameValue, setNamavalue ] = React.useState('')
  const [ tgValue, setTgvalue ] = React.useState('')

  const handleInputChange = ( setStateFunc ) => (evt) => setStateFunc(evt.target.value)
  return (
    <section className={styles.pageForm}>
      <div className={styles.content}>
        <form className={styles.form}>
          <div className={styles.textSvg} />
          <p className={styles.text}>Оставьте заявку и менеджер свяжется с вами в ближайшее время</p>
          <fieldset className={styles.fieldset}>
            <BasicInput placeholder='Имя' value={nameValue} onChange={handleInputChange(setNamavalue)} />
            <BasicInput placeholder='Telegram' value={tgValue} onChange={handleInputChange(setTgvalue)} />
            <ArrowButton handler={() => false}/>
          </fieldset>
        </form>
        <div className={styles.imageContainer}>
          <MediaImage image={image} image480={image480} />
        </div>
      </div>

    </section>
  )
}