import * as React from "react"
import * as styles from './countries-marquee.module.css';
import Marquee from "react-fast-marquee";
import { countriesData } from "../../../misc/common-data";

export default function CountriesMarquee() {

  return (
    <section className={styles.countriesMarquee}>
      <div className={styles.content}>
        <Marquee gradient={false} >
          <ul className={styles.list}>
            {
              countriesData.map((countryName, index) => (
                <li key={index} className={styles.listElement}>
                  <p className={styles.countryName}>{countryName}</p>
                </li>
              ))
            }
          </ul>
        </Marquee>
      </div>
    </section>
  )
}