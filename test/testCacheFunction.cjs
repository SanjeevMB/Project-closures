let cacheFunction = require('../cacheFunction.cjs');

function callBack(args){
    return args;
}

let retrurnFunc = cacheFunction(callBack, 'args1', 'args2', 'args3', 'args4');

let cacheStore = retrurnFunc('args5', 'args6')

console.log(cacheStore);