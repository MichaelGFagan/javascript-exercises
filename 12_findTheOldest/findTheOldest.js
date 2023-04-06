const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    oldestPerson = {}
    oldestAge = 0
    for (const person of people) {
        if ('yearOfDeath' in person) {
            yearOfDeath = person['yearOfDeath'];
        }
        else {
            yearOfDeath = currentYear;
        };
        let personAge = yearOfDeath - person['yearOfBirth'];
        if (personAge > oldestAge) {
            oldestAge = personAge;
            oldestPerson = person
        };
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
