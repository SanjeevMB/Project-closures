function limitFunctionCallCount(cb) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned

    if(cb === undefined){
        throw new error('Either no arguments or partial arguments');
    }
    function returnedFun(para1, para2, para3, para4) {
        for (let index = 0; index < arguments.length; index++) {
            cb(arguments[index]);
        }
    }
    return returnedFun;
}

module.exports = limitFunctionCallCount; 


/*• Your limitFunctionCallCount implementation did not throw an error when there were no or partial parameters passed to it. Instead of returning a random data type, you can throw an error when the parameters fail a data check. You will then have to use try catch inside your test file to verify that the function is throwing the correct error message.
• Your limitFunctionCallCount implementation did not invoke the callback when the returned function was called
• Your limitFunctionCallCount implementation invoked the callback when the returned function was called more than the given limit.
• Your limitFunctionCallCount implementation did not invoke the callback correctly when the returned function was called. It should invoke it with all the parameters that were passed to the returned function. There is no fixed number of parameters that the callback function will take. */