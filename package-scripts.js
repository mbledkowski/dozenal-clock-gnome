const {series, concurrent, copy} = require('nps-utils');

module.exports = {
  scripts: {
    default: {
      script: 'nps compile && nps uglify && nps copy',
    },
    compile: {
      script: 'tsc -p src/ts --outFile out/extension.js',
    },
    copy: {
      script: copy('src/metadata.json out/'),
    },
    uglify: {
      script: "uglifyjs -m -o out/extension.js --comments -- out/extension.js",
    }
  }
};
