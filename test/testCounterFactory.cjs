let counterFactory = require('../counterFactory.cjs');

let calculator = counterFactory();

let counter1 = calculator.increment();
let counter2 = calculator.decrement();
let counter3 = calculator.increment();
let counter4 = calculator.decrement();

console.log(counter1,counter2,counter3,counter4);