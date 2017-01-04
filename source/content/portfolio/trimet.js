import PortfolioProject from 'Templates/PortfolioProject';
import thumbnailImage from './assets/trimet-homepage.jpg'; //responsive?size=720!
import trimetHomepageImage from './assets/trimet-homepage.jpg';

export default {
  template: PortfolioProject,
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
