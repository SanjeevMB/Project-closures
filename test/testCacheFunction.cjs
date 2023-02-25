let cacheFunction = require('../cacheFunction.cjs');

function callBack(args){
    return args;
}

let retrurnFunc = cacheFunction(callBack);

console.log(retrurnFunc());