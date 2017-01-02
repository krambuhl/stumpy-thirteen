import Homepage from 'templates/Homepage';
import npmPackages from './assets/npm.json';
import githubRepositories from './assets/github.json';

export {
  template: Homepage,
  data: {
    pageTitle: 'Open Source - Stumptown Bear',
    npmPackages,
    githubRepositories
  }
}
