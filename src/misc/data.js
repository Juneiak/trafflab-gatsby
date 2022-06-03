import blogArticleImage1 from '../images/blog-cards-images/card-1.png'
import blogArticleImage2 from '../images/blog-cards-images/card-2.png'
import blogArticleImage3 from '../images/blog-cards-images/card-3.png'
import blogArticleImage4 from '../images/blog-cards-images/card-4.png'

import partnerLogo1 from '../images/partner-logos/logo-1.png';
import partnerLogo2 from '../images/partner-logos/logo-2.png';
import partnerLogo3 from '../images/partner-logos/logo-3.png';
import partnerLogo4 from '../images/partner-logos/logo-4.png';
import partnerLogo5 from '../images/partner-logos/logo-5.png';
import partnerLogo6 from '../images/partner-logos/logo-6.png';
import partnerLogo7 from '../images/partner-logos/logo-7.png';
import partnerLogo8 from '../images/partner-logos/logo-8.png';


const blogArticlesData = [
  {
    image: blogArticleImage1,
    title: 'IT мероприятия в Москве и онлайне',
    text: 'Чего вы хотите достичь или избежать? Ответы на эти вопросы — это ваши задачи. Как вы собираетесь добиваться желаемых...'
  },
  {
    image: blogArticleImage2,
    title: 'IT мероприятия в Москве и онлайне',
    text: 'Чего вы хотите достичь или избежать? Ответы на эти вопросы — это ваши задачи. Как вы собираетесь добиваться желаемых...'
  },
  {
    image: blogArticleImage3,
    title: 'Создайте свою стратегию победы',
    text: 'Хотите программировать, но не знаете с чего начать? Начните с бесплатного интенсива, где вы попробуете себя в роли Data Scientist...'
  },
  {
    image: blogArticleImage4,
    title: 'IT мероприятия в Москве и онлайне',
    text: 'Чего вы хотите достичь или избежать? Ответы на эти вопросы — это ваши задачи. Как вы собираетесь добиваться желаемых...'
  }
]

const countriesData = [
  'Cyprus',
  'Ukraine',
  'Indonesia',
  'France',
  'Russia',
  'Cyprus',
  'Ukraine',
]

const partnersData = [
  {
    logo: partnerLogo1,
    dimensionsStyle: {width: '84em', height: '84em'},
  },
  {
    logo: partnerLogo2,
    dimensionsStyle: {width: '65em', height: '64em'},
  },
  {
    logo: partnerLogo3,
    dimensionsStyle: {width: '230em', height: '65em'},
  },
  {
    logo: partnerLogo4,
    dimensionsStyle: {width: '196em', height: '34em'},
  },
  {
    logo: partnerLogo5,
    dimensionsStyle: {width: '155em', height: '41em'},
  },
  {
    logo: partnerLogo6,
    dimensionsStyle: {width: '115em', height: '49em'},
  },
  {
    logo: partnerLogo7,
    dimensionsStyle: {width: '77em', height: '76em'},
  },
  {
    logo: partnerLogo8,
    dimensionsStyle: {width: '225em', height: '64em'},
  },
]

const vacanciesData = [
  {
    status: 'Удалённо',
    speciality: 'Data scientist',
    experience: 'от 1 года',
    about: 'Сбор, анализ, структурирование данных компании. Подготовка отчетов и поиск оптимальных решений для обработки информации'
  },
  {
    status: 'Удалённо',
    speciality: 'Swift developer',
    experience: 'от 1 года',
    about: 'Разработка необходимого ПО, приложений на базе IOS'
  },
  {
    status: 'Удалённо',
    speciality: 'Media buyer',
    experience: 'от 1 года',
    about: 'Работа с рекламными сетями (Facebook, TikTok, Google), залив трафика и поиск новых связок'
  },
  {
    status: 'Удалённо',
    speciality: 'Affiliate manager',
    experience: 'от 1 года',
    about: 'Поиск новых вебмастеров, коммуникация, помощь, сбор обратной связи'
  },
  {
    status: 'Удалённо',
    speciality: 'Systems Analyst',
    experience: 'от 3 лет',
    about: 'Технический анализ работы отделов компании, поиск недостатков, формулировка задач по разработке необходимых решений и ПО'
  },
  {
    status: 'Удалённо',
    speciality: 'HR Business Partner',
    experience: 'от 2 лет',
    about: 'Поиск новых сотрудников, тимбилдинг и управление персоналом'
  },
]

export {
  blogArticlesData,
  countriesData,
  partnersData,
  vacanciesData,
}