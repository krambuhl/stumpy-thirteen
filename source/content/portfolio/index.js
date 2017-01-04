import Portfolio from 'Templates/Portfolio';

import trimet from './trimet';

export default {
  template: Portfolio,
  data: {
    pageTitle: 'Portfolio - Stumptown Bear',
    projects: [
      Object.assign({ href: 'trimet' }, trimet.data),
      Object.assign({ href: 'fuzzy-chainsaw' }, trimet.data),
      Object.assign({ href: 'spectrum-health' }, trimet.data),
      Object.assign({ href: 'ca-portfolio' }, trimet.data),
      Object.assign({ href: 'juniper-deception-force' }, trimet.data),
      Object.assign({ href: 'webtrends-today' }, trimet.data),
      Object.assign({ href: 'webtrends-prototypes' }, trimet.data),
      Object.assign({ href: 'webtrends-streams' }, trimet.data),
      Object.assign({ href: 'juniper-rap-battle' }, trimet.data),
      Object.assign({ href: 'personal-prototypes' }, trimet.data),
      Object.assign({ href: 'il7' }, trimet.data),
      Object.assign({ href: 'iounoi' }, trimet.data),
      Object.assign({ href: 'precision-machines' }, trimet.data),
    ]
  }
}
