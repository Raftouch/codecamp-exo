// npm - global command, comes with node
// npm --version (npm --v)

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - us it in any project
// npm install -g <packageName>
// sudo npm install -g <packagename> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, pressenter to skip)
// npm init -y (everything set up by default)

// all dependendies are in node_modules
// package.json - crucial when sharing a project with other developers

const _ = require('lodash')
// lodash - utility library

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);

