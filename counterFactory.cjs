function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.


    let positiveCounter = 0;
    let negativeCounter = 0;
    let increment = () => {
        let initialValue = positiveCounter;
        initialValue++;
        return initialValue;
    }
    let decrement = () => {
        let initialValue = negativeCounter;
        initialValue--;
        return initialValue;
    }



    return {increment: increment, decrement: decrement};
}

module.exports = counterFactory;