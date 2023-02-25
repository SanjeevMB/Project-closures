function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.


    let increment = (initialValue = 0) => ++initialValue;
    let decrement = (initialValue = 0) => --initialValue;

    return {increment: increment, decrement: decrement};
}

module.exports = counterFactory;