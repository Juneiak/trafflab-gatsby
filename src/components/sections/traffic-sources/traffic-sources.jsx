import * as React from "react"
import * as styles from './traffic-sources.module.css';
import SectionContentLayout from "../../common/section-content-layout/section-content-layout";

import TrafficSourcesCard from "./traffic-sources-card/traffic-sources-card";
import asoImage from '../../../images/traffic-sources-images/aso.png';
import fbImage from '../../../images/traffic-sources-images/facebook.png';
import otherImage from '../../../images/traffic-sources-images/other.png';
import pcImage from '../../../images/traffic-sources-images/pc.png';
import seoImage from '../../../images/traffic-sources-images/seo.png';
import ttImage from '../../../images/traffic-sources-images/tiktok.png';
import uacImage from '../../../images/traffic-sources-images/uac.png';
import unityImage from '../../../images/traffic-sources-images/unity.png';
import { LangContext } from "../../../utils/contexts";

export default function TrafficSources() {
  const data = React.useContext(LangContext).trafficSourcesSection;

  return (
    <section id='sources' className={styles.trafficSources}>
      <SectionContentLayout
        titleFirstPart='Traffic'
        titleSecondPart='Sources'
        text={data.text}
        textStyle={{width: '550rem'}}
      >
        <ul className={styles.list}>
          <TrafficSourcesCard image={fbImage} title='Facebook' />
          <TrafficSourcesCard isDownPosition={true} image={ttImage} title='Tiktok' />
          <TrafficSourcesCard image={uacImage} title='Google Ads UAC' />
          <TrafficSourcesCard isDownPosition={true} image={unityImage} title='In-app' />
          <TrafficSourcesCard image={seoImage} title='SEO' />
          <TrafficSourcesCard isDownPosition={true} image={pcImage} title='PPC' />
          <TrafficSourcesCard image={asoImage} title='ASO' />
          <TrafficSourcesCard isDownPosition={true} image={otherImage} title={data.yourOffer} />
        </ul>
      </SectionContentLayout>
    </section>
  )
  
}