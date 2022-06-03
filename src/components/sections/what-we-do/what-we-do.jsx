import * as React from "react"
import * as styles from './what-we-do.module.css';
import WhatWeDoCard from "./what-we-do-card/what-we-do-card";
import MediaImage from '../../ui/media-image/media-image'
import BasicButton from "../../ui/basic-button/basic-button";

import phoneIcon from '../../../images/icons/phone-1.svg';
import calendarIcon from '../../../images/icons/calendar-1.svg';
import redCalendarIcon from '../../../images/icons/calendar-2.svg';
import bannerIcon from '../../../images/icons/banner.svg';
import coinIcon from '../../../images/icons/coin.svg';
import sortIcon from '../../../images/icons/sort.svg';
import graphIcon from '../../../images/icons/graph-2.svg';
import image from '../../../images/what-we-do/what-we-do.png'

export default function WhatWeDo({openFormPopupHandler}) {

  return (
    <section className={styles.whatWeDo}>
      <div className={styles.content}>

        <div className={styles.imageContainer}>
          <MediaImage image={image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Все и сразу!<br/><span style={{color: 'var(--color-red-1'}}>в одном месте</span></h2>
          <ul className={styles.list}>
            <WhatWeDoCard icon={bannerIcon} text='Индивидуальная разработка конвертящих креативов' />
            <WhatWeDoCard icon={calendarIcon} text='Помогаем повысить конверт и выбиваем высокие ставки под ваш источник' />
            <WhatWeDoCard icon={phoneIcon} text='Собственная разработка приложений бесплатно для наших партнеров' />
            <WhatWeDoCard icon={sortIcon} text='Собственные платежки' />
            <WhatWeDoCard icon={coinIcon} text='Вывод денег любым удобным способом' />
            <WhatWeDoCard icon={graphIcon} text='Создаем продукты для улучшения профита' />
            <WhatWeDoCard icon={redCalendarIcon} text='Холд до 14 дней' />
          </ul>
          <div className={styles.buttonContainer}>
            <BasicButton text='Присоединиться' handler={openFormPopupHandler}/>
          </div>
        </div>

      </div>
    </section>
  )
  
}