// fs - file system

const { readFileSync, writeFileSync } = require("fs");
console.log('start')
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `here is the result : ${first}, ${second}`,
  { flag: "a" }
);

// flag a--> to create a new one
console.log('done with this task')
console.log('starting the next one');

// sync --> goes one by one, takes much time, one user after another, not possible to work in parrallel
// one task after anoter