function cacheFunction(cb) {
    // Should return a function that invokes `cb`.
    // A cache (object) should be kept in closure scope.
    // The cache should keep track of all arguments have been used to invoke this function.

    /*If the returned function is invoked with arguments that it has already seen
    then it should return the cached result and not invoke `cb` again.
    `cb` should only ever be invoked once for a given set of arguments. */


    if(cb === undefined){
        throw new Error('CallBack undefined');
    }
    let lengths = arguments.length;
    let argumentsCache = { ...arguments };
    function innerFun() {
        for (let index = 0; index < arguments.length; index++) {
            if (argumentsCache[arguments[index]]) {
                continue;
            } else {
                argumentsCache[lengths] = cb(arguments[index]);
                lengths++;
            }
        }
        return argumentsCache;
    }
    return innerFun;
}

module.exports = cacheFunction;