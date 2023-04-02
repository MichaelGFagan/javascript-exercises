const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof(a) !== 'number' || typeof(b) !== 'number') {
        return 'ERROR'
    }
    else if (a > b) {
        c = a;
        a = b;
        b = c;
    }
    sum = 0
    while (a <= b) {
        sum += a;
        a++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
