const fs = require('fs');
const path = require('path');

const pkginfo = require('npm-registry-package-info');
const ls = require('npm-list-author-packages');

const GitHubApi = require("github");
const github = new GitHubApi();

const npmDataFile = path.resolve(__dirname, 'npm-data.json');
const githubDataFile = path.resolve(__dirname, 'github-data.json');

Promise.all([
  new Promise((resolve, reject) => {
    ls({
      username: 'krambuhl'
    }, (err, list) => {
      if (err) reject(err);
      pkginfo({
        packages: list
      }, (err, res) => {
        if (err) reject(err);
        const output = Object.keys(res.data).map(key => {
          const module = res.data[key];
          return {
            name: module.name,
            version: module['dist-tags'].latest,
            description: module.description,
            lastUpdated: module.time.modified,
            url: 'https://www.npmjs.com/package/' + module.name
          }
        }).sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        });

        fs.writeFile(npmDataFile, JSON.stringify(output, null, 2), (err) => {
          if (err) reject(err);
          resolve();
          console.log('npm data written: ', npmDataFile);
        })
      });
    });
  }),
  new Promise((resolve, reject) => {
    Promise.all([
      new Promise((resolve, reject) => {
        github.repos.getForUser({
          username: 'krambuhl',
          type: 'all',
          page: 1,
          per_page: 100,
        }, (err, res) => {
          if (err) reject(err);
          else resolve(res)
        })
      }),
      new Promise((resolve, reject) => {
        github.repos.getForUser({
          username: 'krambuhl',
          type: 'all',
          page: 2,
          per_page: 100
        }, (err, res) => {
          if (err) reject(err);
          else resolve(res)
        })
      })
    ])
    .then(res => {
      const output = res.reduce((all, resSet) => {
        return all.concat(resSet.map(module => {
          return {
            name: module.name,
            description: module.description,
            lastUpdated: module.updated_at,
            url: module.html_url,
            language: module.language,
            stars: module.stargazers_count
          }
        }));
      }, []).sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      });

      console.log(output.map(a => a.name))

      fs.writeFile(githubDataFile, JSON.stringify(output, null, 2), (err) => {
        if (err) reject(err);
        resolve();
        console.log('github written: ', githubDataFile);
      })
    })
  })
])
.then(res => {
  console.log('data files written.');
  console.log();
})
