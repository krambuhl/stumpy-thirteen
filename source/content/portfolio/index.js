import Portfolio from 'Templates/Portfolio';

import trimet from './trimet';

export default {
  template: Portfolio,
  data: {
    pageTitle: 'Portfolio - Stumptown Bear',
    projects: [
      { href: 'trimet', data: trimet.data },
      { href: 'fuzzy-chainsaw', data: trimet.data },
      { href: 'spectrum-health', data: trimet.data },
      { href: 'ca-portfolio', data: trimet.data },
      { href: 'juniper-deception-force', data: trimet.data },
      { href: 'webtrends-today', data: trimet.data },
      { href: 'webtrends-prototypes', data: trimet.data },
      { href: 'webtrends-streams', data: trimet.data },
      { href: 'juniper-rap-battle', data: trimet.data },
      { href: 'personal-prototypes', data: trimet.data },
      { href: 'il7', data: trimet.data },
      { href: 'iounoi', data: trimet.data },
      { href: 'precision-machines', data: trimet.data },
    ]
  }
}
