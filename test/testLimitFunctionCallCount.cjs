let limitFunctionCallCount = require('../limitFunctionCallCount.cjs');

function callBack(args) {
    return args;
}

let returnedFun = limitFunctionCallCount(callBack, 5);

let result = returnedFun();

console.log(result);