let counterFactory = require('../counterFactory.cjs');

let counter1 = counterFactory();
let counter2 = counterFactory();
let counter3 = counterFactory();
let counter4 = counterFactory();

console.log(counter1.increment(),counter2.increment(),counter1.increment(),counter1.increment());