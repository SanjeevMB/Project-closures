let cacheFunction = require('../cacheFunction.cjs');

function callBack(args) {
    return args;
}

let retrurnFunc = cacheFunction(callBack);

let cacheStore = retrurnFunc()

console.log(cacheStore);