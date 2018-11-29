const {series, concurrent, copy} = require('nps-utils');

module.exports = {
  scripts: {
    default: {
      script: 'nps compile && nps uglify && nps copy',
    },
    compile: {
      script: 'tsc -p src/ts --noImplicitAny --outFile out/extension.js --lib dom,es5,scripthost,es2015.iterable --module system --sourceMap true',
    },
    copy: {
      script: copy('src/metadata.json out/'),
    },
    uglify: {
      script: "uglifyjs -m -o out/extension.js --comments --source-map 'content=\"out/extension.js.map\"' out/extension.js",
    }
  }
};
