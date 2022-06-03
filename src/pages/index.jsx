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

export default function IndexPage() {

  return (
    <IndexPageLayout>
      <CountriesMarquee />
      <TrafficSources />
      <WhatWeDo />
      <Ecosystem />
      <Blog />
      <PartnersMarquee />
      <Vacancies />
      <PageForm />
    </IndexPageLayout>
  )
}
