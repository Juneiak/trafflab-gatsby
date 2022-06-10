import * as React from "react"
import * as styles from './form-popup.module.css';
import PopupLayout from "../popup-layout/popup-layout";
import MediaImage from "../../ui/media-image/media-image";
import image from '../../../images/form-popup/image.png';
import image480 from '../../../images/form-popup/image480.png';
import { LangContext, MessagesContext } from '../../../utils/contexts';
import useForm from '../../../hooks/use-form';
import { sendFormToTg } from "../../../utils/api";
import BasicButton from "../../ui/basic-button/basic-button";
import BasicInput from "../../ui/basic-input/basic-input";

export default function FormPopup({ closeHandler, isOpen }) {

  const {values, handleChange, isValid, handleReset} = useForm()

  const data = React.useContext(LangContext).formPopup;
  const successMessageHandler = React.useContext(MessagesContext)

  const handleSendClick = () => {
    sendFormToTg(values.name, values.tg)
      .then(res => {
        if (res.ok) {
          successMessageHandler()
          handleReset()
          closeHandler()

        }
      })
  }
  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>
      <div className={styles.formPopup}>
        <button onClick={closeHandler} className={styles.closeButton} />

        <div className={styles.imageContainer}><MediaImage image={image} image480={image480} /></div>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.subtitle}>{data.subtitle}</p>

        <form className={styles.form}>
          <div className={styles.inputsContainer}>
              <BasicInput
                name='name'
                placeholder={data.nameInput}
                value={values.name}
                onChange={handleChange}
                minLength={1}
                isRequired={true}
              />
              <BasicInput
                name='tg'
                placeholder='Telegram'
                value={values.tg}
                onChange={handleChange}
                minLength={1}
                isRequired={true}
              />
          </div>
          <div className={styles.buttonContainer}>
            <BasicButton
              text={data.button480}
              isActive={isValid}
              handler={handleSendClick}
            />
            <p className={styles.agreement}>{data.agreement}</p>
          </div>
        </form>

      </div>
    </PopupLayout>
  )
}