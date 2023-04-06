const fibonacci = function(index) {
    if (index === 0) {
        return 0
    }
    else if (index < 0) {
        return 'OOPS'
    }
    fibonacciArray = [1, 1]
    if (index > 2) {
        while (fibonacciArray.length < index) {
            nextNumber = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2]
            fibonacciArray.push(nextNumber)
        }
    }
    return fibonacciArray[fibonacciArray.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
