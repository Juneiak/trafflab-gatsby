import * as React from "react"
import * as styles from './ecosystem.module.css';
import SectionContentLayout from "../../common/section-content-layout/section-content-layout";
import EcosystemCard from "./ecosystem-card/ecosystem-card";
import SliderLayout from "../../common/slider-layout/slider-layout";
import { ecosystemCardsData } from "../../../misc/data";
import { SplideSlide } from '@splidejs/react-splide';

export default function Ecosystem() {

  return (
    <section id='ecosystem' className={styles.ecosystem}>
      <SectionContentLayout
        titleSecondPart='ecosystem'
        text='Ad-Tech платформа Trafflab - это готовое решение для специалиста любого уровня. Мы можем научить лить трафик с нуля и пробить потолок твоего дохода. Экосистема подстраивается под новичов и опытных вебов и решает любую задачу вебмастера.'
        textStyle={{width: '950rem'}}
      >
        <ul className={styles.list}>
          <SliderLayout>
            {
              ecosystemCardsData.map((cardData, index) => (
                <SplideSlide key={index}><EcosystemCard cardClass={cardData.cardClass} linkTo={cardData.linkTo}/></SplideSlide>
              ))
            }
          </SliderLayout>
        </ul>

      </SectionContentLayout>
    </section>
  )
  
}