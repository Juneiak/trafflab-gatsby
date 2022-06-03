import * as React from "react"
import * as styles from './form-popup.module.css';
import PopupLayout from "../popup-layout/popup-layout";
import MediaImage from "../../ui/media-image/media-image";
import image from '../../../images/form-popup/image.png';
import image480 from '../../../images/form-popup/image480.png';

import BasicButton from "../../ui/basic-button/basic-button";
import BasicInput from "../../ui/basic-input/basic-input";

export default function FormPopup({ closeHandler, isOpen }) {
  const [ nameValue, setNamavalue ] = React.useState('');
  const [ tgValue, setTgvalue ] = React.useState('');
  const handleInputChange = ( setStateFunc ) => (evt) => setStateFunc(evt.target.value);

  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
      <div className={styles.formPopup}>
        <button onClick={closeHandler} className={styles.closeButton} />

        <div className={styles.imageContainer}><MediaImage image={image} image480={image480} /></div>
        <p className={styles.title}>Стать лучшим вместе с лучшими</p>
        <p className={styles.subtitle}>Оставьте заявку и менеджер свяжется с вами в ближайшее время</p>

        <form className={styles.form}>
          <div className={styles.inputsContainer}>
            <BasicInput placeholder='Имя' value={nameValue} onChange={handleInputChange(setNamavalue)} />
            <BasicInput placeholder='Telegram' value={tgValue} onChange={handleInputChange(setTgvalue)} />
          </div>
          <div className={styles.buttonContainer}>
            <BasicButton text='Отправить'  handler={() => false}/>
            <p className={styles.agreement}>Я согласен на обработку персональных данных</p>
          </div>
        </form>

      </div>
    </PopupLayout>
  )
}