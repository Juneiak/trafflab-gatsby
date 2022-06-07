import React, { useEffect } from "react";
import { navigate } from "gatsby";

const getRedirectLanguage = () => {

  if (typeof navigator === `undefined`) {
    return "ru";
  }

  const lang = navigator && navigator.language && navigator.language.split("-")[0];
  if (!lang) return "ru";

  switch (lang) {
    case "en":
      return "en";
    case "uk":
      return "ua";
    default:
      return "ru";
  }
};

const IndexPage = () => {
  useEffect(() => {
    let urlLang
    const savedLang = localStorage.getItem('lang')
    if (savedLang) urlLang = localStorage.getItem('lang')
    else {
      urlLang = getRedirectLanguage();
      localStorage.setItem('lang', urlLang);
    }
    
    
    navigate(`/${urlLang}/`, {replace: true});
  }, []);

  return null;
};

export default IndexPage;