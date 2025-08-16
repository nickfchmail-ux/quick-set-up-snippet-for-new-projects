// scripts/setup-sass.js
const fs = require('fs');
const path = require('path');

const sassDir = path.join(__dirname, '../static/sass');
const folders = [
  'abstracts',
  'base',
  'components',
  'layouts',
  'pages',
  'themes',
  'vendors'
];
const files = {
  'abstracts/_variables.scss': '$primary-color: #3498db;\n$spacing-unit: 10px;\n',
  'abstracts/_mixins.scss': '@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n',
  'base/_reset.scss': '* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n',
  'base/_typography.scss': 'body {\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n}\n',
  'components/_button.scss': '@use \'../abstracts/variables\';\n.button {\n  padding: variables.$spacing-unit;\n  background: variables.$primary-color;\n  color: white;\n  border: none;\n}\n',
  'layouts/_header.scss': '.header {\n  padding: 20px;\n  background: #f8f8f8;\n}\n',
  'pages/_home.scss': '@use \'../components/button\';\n.home-page {\n  .hero-btn { @extend button.button; }\n  margin: 20px;\n}\n',
  'themes/_theme-dark.scss': ':root {\n  --background: #333;\n  --text-color: #fff;\n}\n',
  'vendors/_bootstrap.scss': '// Add Bootstrap overrides here\n',
  'main.scss': '@use \'base/reset\';\n@use \'base/typography\';\n@use \'abstracts/variables\';\n@use \'abstracts/mixins\';\n@use \'components/button\';\n@use \'layouts/header\';\n@use \'pages/home\';\n@use \'themes/theme-dark\';\n@use \'vendors/bootstrap\';\n'
};

// Create directories
fs.mkdirSync(sassDir, { recursive: true });
folders.forEach(folder => {
  fs.mkdirSync(path.join(sassDir, folder), { recursive: true });
});

// Create files
Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(sassDir, filePath), content);
});

console.log('7-1 Sass structure created in static/sass/');