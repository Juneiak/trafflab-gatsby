import * as React from "react"
import * as styles from './blog.module.css';
import SectionContentLayout from "../../common/section-content-layout/section-content-layout";
import BlogCard from "./blog-card/blog-card";
import { blogArticlesData } from '../../../misc/data';

export default function Blog({openArticlePopupHandler}) {

  return (
    <section id="blog" className={styles.blog}>
      <SectionContentLayout
        titleSecondPart='блог'
        text='Актуальные новости, рекомендации по заливу, мануалы, инсайдерская информация из закрытых источников аффилейт-маркетинга. Читай блог TraffLab и будь в курсе всех событий рынка.'
        textStyle={{width: '680rem'}}
        noMarginBottom={true}
      >
        <ul className={styles.list}>
          {
            blogArticlesData.map((articleData, index) => (
              <li key={index} className={styles.listElement}>
                <BlogCard openHandler={openArticlePopupHandler} data={articleData}/>
              </li>
            ))
          }
        </ul>
      </SectionContentLayout>
    </section>
  )
}