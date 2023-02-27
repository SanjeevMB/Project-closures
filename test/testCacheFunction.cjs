let cacheFunction = require('../cacheFunction.cjs');

function CallBack(args) {
    return args;
}

let retrurnFunc = cacheFunction(CallBack);

try {
    console.log(retrurnFunc('args1', 'args2', 'args3'));
} catch (error) {
    console.log(error);
}