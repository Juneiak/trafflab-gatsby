import * as React from "react"
import * as styles from './article-popup.module.css';
import PopupLayout from '../popup-layout/popup-layout';
import MediaImage from "../../ui/media-image/media-image";
import image from '../../../images/blog-article-popup/image.png';

export default function ArticlePopup({isOpen, closeHandler}) {
  
  return (
    <PopupLayout isOpen={isOpen} closeHandler={closeHandler}>

      <div className={styles.articlePopup}>
        <button onClick={closeHandler} className={styles.closeButton} />
        <div className={styles.content}>

          <div className={styles.imageContainer}><MediaImage image={image} /></div>
          <h3 className={styles.title}>Выставка Bauhaus Typography at 100 и лекция Эллен Лаптон</h3>
          <div className={styles.textContainer}>
            <p className={styles.text}>В честь столетия великой Школы дизайна, в Letterform Archive создали выставку типографики Баухауса. Вы можете прямо сейчас посетить виртуальный тур по ней и посмотреть множество интересных работ, опубликованных впервые в отличном качестве: exhibitions.letterformarchive.org (https://exhibitions.letterformarchive.org/)</p>
            <p className={styles.text}>Следующая тема культового немецкого журнала о типографике и дизайне Slanted посвящена экспериментальным шрифтам, основанным на ошибках, неточностях, генеративной графике и вариативных форматах. Свои работы могут загрузить шрифтовики, типографы, дизайнеры, иллюстраторы, художники. И сразу попасть в галерею на сайте, а возможно, и в печатное издание. </p>
            <p className={styles.text}>Следующая тема культового немецкого журнала о типографике и дизайне Slanted посвящена экспериментальным шрифтам, основанным на ошибках, неточностях, генеративной графике и вариативных форматах. Свои работы могут загрузить шрифтовики, типографы, дизайнеры, иллюстраторы, художники. И сразу попасть в галерею на сайте, а возможно, и в печатное издание. </p>
          </div>

        </div>
      </div>
    </PopupLayout>

  )
}