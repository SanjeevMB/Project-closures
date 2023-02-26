function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.

    let counter = 0;
    let increment = () => counter += 1;
    let decrement = () => counter -= 1;
    return { increment: increment, decrement: decrement };
}

module.exports = counterFactory;