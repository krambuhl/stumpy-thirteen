import PortfolioItem from 'templates/PortfolioItem';
import thumbnailImage from 'responsive?size=720!./assets/trimet-homepage.jpg';
import trimetHomepageImage from './assets/trimet-homepage.jpg';

export {
  template: PortfolioItem,
  data: {
    pageTitle: 'Trimet.org - Stumptown Bear',
    title: 'Trimet.org redesign',
    year: 2015,
    company: 'TriMet',
    companyHref: 'http://trimet.org',
    projectHref: 'http://trimet.org',
    projectImages: [{
      alt: 'Trimet.org hompage tools',
      url: trimetHomepageImage
    }],
    thumbnail: thumbnailImage
  }
}
