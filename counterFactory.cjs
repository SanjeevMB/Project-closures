function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.

    let counter = 5;
    let counterStore = {
        increment: () => counter++,
        decrement: () => counter--
    }
    return counterStore;
}

module.exports = counterFactory;