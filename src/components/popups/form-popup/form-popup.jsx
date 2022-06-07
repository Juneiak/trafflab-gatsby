import * as React from "react"
import * as styles from './form-popup.module.css';
import PopupLayout from "../popup-layout/popup-layout";
import MediaImage from "../../ui/media-image/media-image";
import image from '../../../images/form-popup/image.png';
import image480 from '../../../images/form-popup/image480.png';
import { LangContext } from '../../../utils/contexts';

import BasicButton from "../../ui/basic-button/basic-button";
import BasicInput from "../../ui/basic-input/basic-input";

export default function FormPopup({ closeHandler, isOpen }) {
  const [ nameValue, setNamavalue ] = React.useState('');
  const [ tgValue, setTgvalue ] = React.useState('');
  const data = React.useContext(LangContext).formPopup;

  const handleInputChange = ( setStateFunc ) => (evt) => setStateFunc(evt.target.value);

  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
      <div className={styles.formPopup}>
        <button onClick={closeHandler} className={styles.closeButton} />

        <div className={styles.imageContainer}><MediaImage image={image} image480={image480} /></div>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.subtitle}>{data.subtitle}</p>

        <form className={styles.form}>
          <div className={styles.inputsContainer}>
            <BasicInput placeholder={data.nameInput} value={nameValue} onChange={handleInputChange(setNamavalue)} />
            <BasicInput placeholder='Telegram' value={tgValue} onChange={handleInputChange(setTgvalue)} />
          </div>
          <div className={styles.buttonContainer}>
            <BasicButton text={data.button480}  handler={() => false}/>
            <p className={styles.agreement}>{data.agreement}</p>
          </div>
        </form>

      </div>
    </PopupLayout>
  )
}