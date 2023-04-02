const removeFromArray = function(arrayToFilter, ...numbersToFilter) {
    return arrayToFilter.filter(function(number) { return !numbersToFilter.includes(number) })
};

// Do not edit below this line
module.exports = removeFromArray;
