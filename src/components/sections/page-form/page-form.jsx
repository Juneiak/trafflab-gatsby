import * as React from "react"
import * as styles from './page-form.module.css';
import { Is480Context, LangContext, MessagesContext } from "../../../utils/contexts";
import { sendFormToTg } from '../../../utils//api'
import useForm  from '../../../hooks/use-form'
import MediaImage from "../../ui/media-image/media-image";
import image from '../../../images/page-form/page-form.png';
import image480 from '../../../images/page-form/page-form480.png';
import BasicInput from "../../ui/basic-input/basic-input";
import ArrowButton from "../../ui/arrow-button/arrow-button";
import BasicButton from "../../ui/basic-button/basic-button";

export default function PageForm() {

  const { values, handleChange, isValid, handleReset} = useForm()

  const is480 = React.useContext(Is480Context)

  const data = React.useContext(LangContext);
  const successMessageHandler = React.useContext(MessagesContext);

  const handleSendClick = () => {
    sendFormToTg(values.name, values.tg)
      .then(res => {
        if (res.ok) {
          successMessageHandler()
          handleReset()
        }
      })
  }

  return (
    <section className={styles.pageForm}>
      <div className={styles.content}>

        <div className={styles.formContainer}>
          <div className={`${styles.textSvg} ${styles['textSvg' + data.lang]}`} />
          <p className={styles.text}>{data.pageForm.text}</p>
          <form className={styles.form}>
            <BasicInput
              name='name'
              placeholder={data.pageForm.nameInput}
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
            {is480
              ? <BasicButton
                  isActive={isValid}
                  text={data.pageForm.button480}
                  handler={handleSendClick}
                />
              : <ArrowButton
                  isActive={isValid}
                  direction='right'
                  handler={handleSendClick}
                />
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