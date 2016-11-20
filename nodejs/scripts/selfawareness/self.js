/**
  Demonstrating self awareness capabilities of scripts / modules

 https://nodejs.org/api/modules.html#modules_accessing_the_main_module
*/
const assert = require('assert');

function main() {
  if (require.main === module) {
    console.log('I was called like this: node', require.main.filename);
  } else {
    console.log('I was called like this: require("./self.js")');
  }

  //assert(__filename == require.main.filename); /* well filename is not just file name but fully qualified path to file */

  console.log('I am file:', __filename);
  console.log('I am module:', module);
  console.log('I reside in (ie. current dir is)', __dirname);
}

if (require.main === module) { /* otherwise main will run in time of require in other scripts */
  main();
}

module.exports = main;
