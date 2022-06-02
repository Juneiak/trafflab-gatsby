import * as React from "react"
import * as styles from './ecosystem.module.css';
import { Link } from "gatsby";
import SectionContentLayout from "../../common/section-content-layout/section-content-layout";
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Ecosystem() {

  return (
    <section className={styles.ecosystem}>
      <SectionContentLayout
        titleFirstPart='Traffic'
        titleSecondPart='ecosystem'
        text='Ad-Tech платформа Trafflab - это готовое решение для специалиста любого уровня. Мы можем научить лить трафик с нуля и пробить потолок твоего дохода. Экосистема подстраивается под новичов и опытных вебов и решает любую задачу вебмастера.'
        textStyle={{width: '950rem'}}
      >
        <ul className={styles.list}>
          <li><article className={`${styles.card} ${styles.labCard}`}>
            <Link to='#lab'><div className={styles.logo}></div></Link>
          </article></li>
          <li><article className={`${styles.card} ${styles.edCard}`}>
            <Link to='#education'><div className={styles.logo}></div></Link>
          </article></li>
          <li><article className={`${styles.card} ${styles.appsCard}`}>
            <Link to='#apps'><div className={styles.logo}></div></Link>
          </article></li>
          <li><article className={`${styles.card} ${styles.cryptCard}`}>
            <Link to='#crypt'><div className={styles.logo}></div></Link>
          </article></li>
          <li><article className={`${styles.card} ${styles.merchCard}`}>
            <Link to='#merch'><div className={styles.logo}></div></Link>
          </article></li>
        </ul>

      </SectionContentLayout>
    </section>
  )
  
}