function limitFunctionCallCount(cb, limit) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned

    let callLimit = 0;

    if (cb === undefined || typeof cb !== 'function') {
        throw new Error('Either no callBack or not a function');
    } else if (callLimit === undefined) {
        throw new Error('No limit pass')
    }
    function returnedFun() {
        if (callLimit < limit) {
            callLimit++;
            return cb(...arguments);
        } else {
            return null;
        }
    }
    return returnedFun;
}

module.exports = limitFunctionCallCount;