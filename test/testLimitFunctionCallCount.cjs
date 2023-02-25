let limitFunctionCallCount = require('../limitFunctionCallCount.cjs');

let number = 7;

let startPoint = 1;

function callBackTableCalculator() {
    let multiple = number * startPoint;
    startPoint++;
    return multiple;
}

let outer = limitFunctionCallCount(callBackTableCalculator, 10);

let result = outer();

console.log(result);