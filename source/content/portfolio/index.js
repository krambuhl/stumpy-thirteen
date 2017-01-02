import PortfolioIndex from 'templates/PortfolioIndex';

import { data as trimetData } from './trimet.js';

export {
  template: PortfolioIndex,
  data: {
    pageTitle: 'Portfolio - Stumptown Bear',
    projects: [
      { href: 'trimet', data: trimetData },
      { href: 'fuzzy-chainsaw', data: trimetData },
      { href: 'spectrum-health', data: trimetData },
      { href: 'ca-portfolio', data: trimetData },
      { href: 'juniper-deception-force', data: trimetData },
      { href: 'webtrends-today', data: trimetData },
      { href: 'webtrends-prototypes', data: trimetData },
      { href: 'webtrends-streams', data: trimetData },
      { href: 'juniper-rap-battle', data: trimetData },
      { href: 'personal-prototypes', data: trimetData },
      { href: 'il7', data: trimetData },
      { href: 'iounoi', data: trimetData },
      { href: 'precision-machines', data: trimetData },
    ]
  }
}
