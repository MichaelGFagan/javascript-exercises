const isLetter = function(letter) {
    return letter.toLowerCase() != letter.toUpperCase();
};

const removeNonLetters = function(word) {
    wordArray = word.split('')
    arrayLength = wordArray.length
    returnArray = []
    for (i = 0; i < arrayLength; i++) {
        currentLetter = wordArray[i].toLowerCase()
        if (isLetter(currentLetter)) {
            returnArray.push(currentLetter)
        }
    }
    return returnArray.join('')
}

const reverseString = function(word) {
    wordArray = word.split('')
    arrayLength = wordArray.length
    returnArray = []
    for (i = 1; i <= arrayLength; i++) {
        currentLetter = wordArray[arrayLength - i]
        returnArray.push(currentLetter)
    }
    return returnArray.join('')
};

const palindromes = function (word) {
    word = removeNonLetters(word)
    reverseWord = reverseString(word)
    return word === reverseWord
};

// Do not edit below this line
module.exports = palindromes;
