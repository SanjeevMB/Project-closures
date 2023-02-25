let counterFactory = require('../counterFactory.cjs');

let calculator = counterFactory();

let incrementValue = calculator.increment();
let decrementValue = calculator.decrement();

console.log(incrementValue, decrementValue);