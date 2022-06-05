import * as React from "react";
import IndexPageLayout from "../components/index-page-layout/index-page-layout";
import {
  CountriesMarquee,
  TrafficSources,
  WhatWeDo,
  Ecosystem,
  Blog,
  PartnersMarquee,
  Vacancies,
  PageForm,
} from '../components/sections';

import { FormPopup, ArticlePopup, NavPopup } from "../components/popups";

export default function IndexPage() {

  const [ articlePopupOpen, setArticlePopupOpen ] = React.useState(false);
  const [ formPopupOpen, setFormPopupOpen ] = React.useState(false);
  const [ navPopupOpen, setNavPopupOpen ] = React.useState(false);

  const openNavPopup = () =>  setNavPopupOpen(true);
  const closeNavPopup = () => setNavPopupOpen(false);

  const openFormPopup = () =>  setFormPopupOpen(true);
  const closeFormPopup = () => setFormPopupOpen(false);

  const openArticlePopup = () =>  setArticlePopupOpen(true);
  const closeArticlePopup = () => setArticlePopupOpen(false);

  return (
    <>
      <IndexPageLayout openNavPopupHandler={openNavPopup}  openFormPopupHandler={openFormPopup}>
        <CountriesMarquee />
        <TrafficSources />
        <WhatWeDo openFormPopupHandler={openFormPopup}/>
        <Ecosystem />
        <Blog openArticlePopupHandler={openArticlePopup}/>
        <PartnersMarquee />
        <Vacancies />
        <PageForm />
      </IndexPageLayout>

      <ArticlePopup isOpen={articlePopupOpen} closeHandler={closeArticlePopup} />
      <FormPopup isOpen={formPopupOpen} closeHandler={closeFormPopup}/>
      <NavPopup isOpen={navPopupOpen} closeHandler={closeNavPopup}/>

    </>
  )
}
