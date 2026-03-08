/**
 * Inlines all component HTML into index.html so the site works without fetch
 * (file:// and GitHub Pages). Run before deploy: node build.js
 */
const fs = require('fs');
const path = require('path');

const COMPONENTS = [
  'components/navbar.html',
  'components/hero.html',
  'components/about.html',
  'components/experience.html',
  'components/projects.html',
  'components/publications.html',
  'components/footer.html'
];

const root = __dirname;
// Read from template so we can run build multiple times
let indexHtml = fs.readFileSync(path.join(root, 'index.template.html'), 'utf8');

const parts = [];
for (const rel of COMPONENTS) {
  const file = path.join(root, rel);
  parts.push(fs.readFileSync(file, 'utf8'));
}
const inlined = parts.join('\n');

indexHtml = indexHtml.replace(
  /<div id="app"><\/div>/,
  '<div id="app">\n' + inlined + '\n    </div>'
);
indexHtml = indexHtml.replace(
  /<script src="assets\/js\/components-loader\.js"><\/script>/,
  '<script src="assets/js/main.js"></script>'
);

fs.writeFileSync(path.join(root, 'index.html'), indexHtml);
console.log('Built index.html with inlined components. Deploy this file to GitHub Pages.');
