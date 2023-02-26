let counterFactory = require('../counterFactory.cjs');

let counterObject1 = counterFactory();

let increment = counterObject1.increment;
let decrement = counterObject1.decrement;

console.log(increment(), decrement(), decrement(), decrement(), decrement(), increment(), increment());