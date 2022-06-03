import * as React from "react"
import * as styles from './partners-marquee.module.css';
import Marquee from "react-fast-marquee";
import MediaImage from "../../ui/media-image/media-image";
import { partnersData } from "../../../misc/data";

export default function PartnersMarquee() {

  return (
    <section className={styles.partenrsMarquee}>
      <div className={styles.content}>

        <h2 className={styles.title}>Партнёры и рекламодатели</h2>
        <Marquee gradient={false} direction="right">
          <ul className={styles.list}>
            {
              partnersData.map((partnerData, index) => (
                <li key={index} className={styles.listElement}>
                  <div style={partnerData.dimensionsStyle}>
                    <MediaImage image={partnerData.logo} />
                  </div>
                </li>
              ))
            }
          </ul>
        </Marquee>
      </div>
    </section>
  )
}