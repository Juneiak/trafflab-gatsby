import * as React from "react"
import * as styles from './article-popup.module.css';
import PopupLayout from '../popup-layout/popup-layout';
import MediaImage from "../../ui/media-image/media-image";
import image from '../../../images/blog-article-popup/image.png';
import { LangContext } from "../../../utils/contexts";

export default function ArticlePopup({isOpen, id, closeHandler}) {

  const data = React.useContext(LangContext).blog.articlesList[id];
  if (!data) return null

  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>

      <div className={styles.articlePopup}>
        <button onClick={closeHandler} className={styles.closeButton} />
        <div className={styles.content}>

          <div className={styles.imageContainer}><MediaImage image={data.image} /></div>
          <h3 className={styles.title}>{data.title}</h3>
          <div className={styles.textContainer}>
            <p className={styles.text}>{data.text}</p>
            {/* {
              data.texts.map((text, index) => (
                <p key={index} className={styles.text}>{text}</p>
              ))
            } */}
          </div>

        </div>
      </div>
    </PopupLayout>

  )
}