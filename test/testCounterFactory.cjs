let counterFactory = require('../counterFactory.cjs');

let counterObject1 = counterFactory();
let counterObject2 = counterFactory();


let increment = counterObject1.increment;
let decrement = counterObject2.decrement;

console.log(increment(),decrement(),decrement(),decrement(),decrement(),increment(),increment());