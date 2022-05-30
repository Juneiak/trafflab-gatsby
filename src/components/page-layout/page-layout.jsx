import * as React from "react";
import '../../styles/global.css';
import * as styles from './page-layout.module.css';
import { Header, Footer  } from "../sections";

export default function PageLayout({ children }) {


  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        { children }
      </main>
      <Footer />
    </div>
  )
}