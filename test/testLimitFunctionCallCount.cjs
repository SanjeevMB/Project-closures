let limitFunctionCallCount = require('../limitFunctionCallCount.cjs');

function callBack(args) {    
    return args;
}

let returnedFun = limitFunctionCallCount(callBack);

let result = returnedFun('Para1', 'Para2', 'Para3', 'Para4');

console.log(result);