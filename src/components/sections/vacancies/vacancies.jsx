import * as React from "react"
import * as styles from './vacancies.module.css';
import SectionContentLayout from "../../common/section-content-layout/section-content-layout";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import VacanciesCard from "./vacancies-card/vacancies-card";
import { vacanciesData } from '../../../misc/data';

export default function Vacancies() {

  return (
    <section id='vacancies' className={styles.vacancies}>
      <SectionContentLayout
        titleSecondPart='вакансии'
        text='ATrafflab всегда нужны профи своего дела. У тебя есть навыки кодинга, ты делаешь успехи в дизайне или всегда знаешь, где найти профитные связки? У нас есть выгодное предложение! Trafflab - международная компания, работающая по единому принципу: win-win. Работай удаленно из удобной точки планеты, развивайся, а мы дадим все для этого необходимое.'
        textStyle={{width: '1150rem'}}
      >
        <ul className={styles.list}>
          {
            vacanciesData.map((vacancyData, index) => (
              <li key={index} className={styles.listElement}>
                <VacanciesCard data={vacancyData}/>
              </li>
            ))
          }
        </ul>

      </SectionContentLayout>
    </section>
  )
  
}