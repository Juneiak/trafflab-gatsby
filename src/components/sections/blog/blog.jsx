import * as React from "react"
import * as styles from './blog.module.css';
import SectionContentLayout from "../../common/section-content-layout/section-content-layout";

import TrafficSourcesCard from "./blog-card/blog-card";
import asoImage from '../../../images/traffic-sources-images/aso.png';
import fbImage from '../../../images/traffic-sources-images/facebook.png';
import otherImage from '../../../images/traffic-sources-images/other.png';
import pcImage from '../../../images/traffic-sources-images/pc.png';
import seoImage from '../../../images/traffic-sources-images/seo.png';
import ttImage from '../../../images/traffic-sources-images/tiktok.png';
import uacImage from '../../../images/traffic-sources-images/uac.png';
import unityImage from '../../../images/traffic-sources-images/unity.png';

export default function Blog() {

  return (
    <section className={styles.ecosystem}>
      <SectionContentLayout
        titleFirstPart='Traffic'
        titleSecondPart='блог'
        text='Актуальные новости, рекомендации по заливу, мануалы, инсайдерская информация из закрытых источников аффилейт-маркетинга. Читай блог TraffLab и будь в курсе всех событий рынка.'
        textStyle={{width: '680rem'}}
      >
        <ul className={styles.list}>
          {/* <TrafficSourcesCard image={fbImage} title='Facebook' />
          <TrafficSourcesCard isDownPosition={true} image={ttImage} title='Tiktok' />
          <TrafficSourcesCard image={uacImage} title='Google Ads UAC' />
          <TrafficSourcesCard isDownPosition={true} image={unityImage} title='In-app' />
          <TrafficSourcesCard image={seoImage} title='SEO' />
          <TrafficSourcesCard isDownPosition={true} image={pcImage} title='PPC' />
          <TrafficSourcesCard image={asoImage} title='ASO' />
          <TrafficSourcesCard isDownPosition={true} image={otherImage} title='Предложи свой' /> */}
        </ul>
      </SectionContentLayout>
    </section>
  )
}