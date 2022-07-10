const fs = require('fs-extra');

const concat = require('concat');

(async function build() {

  const files = [

    './dist/my-app/runtime.js',

    './dist/my-app/polyfills.js',

    './dist/my-app/main.js'

  ];

  await concat(files, './dist/my-app.js');

  await fs.ensureDir('./dist/assets/my-app');

  await fs.copyFile('./dist/my-app/styles.css', './dist/assets/my-app/styles.css');

})();

