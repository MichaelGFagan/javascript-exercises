const reverseString = function(word) {
    wordArray = word.split('')
    arrayLength = wordArray.length
    returnArray = []
    for (i = 1; i <= arrayLength; i++) {
        returnArray.push(wordArray[arrayLength - i])
    }
    return returnArray.join('')
};

// Do not edit below this line
module.exports = reverseString;
