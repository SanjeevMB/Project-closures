function limitFunctionCallCount(cb, n) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned

    function tableCalculator() {
        let table = [];
        for (let index = 0; index < n; index++) {
            table.push(cb());
        }
        return table;
    }
    return tableCalculator;
}

module.exports = limitFunctionCallCount; 