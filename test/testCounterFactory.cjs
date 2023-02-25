let counterFactory = require('../counterFactory.cjs');

let calculator = counterFactory();

let counter1 = calculator.increment(4);

let counter2 = calculator.decrement(10);

let counter3 = calculator.increment(20);

let counter4 = calculator.decrement(30);

console.log(counter1,counter2,counter3,counter4);