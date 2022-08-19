const findTheOldest = function(input) {
    const people = input;
    let maxAge = 0;
    let oldest = {};
    const date = new Date();
    for (let person of people){
        if(person.yearOfDeath){person.age = (person.yearOfDeath - person.yearOfBirth)}
        else {
            person.age = (date.getFullYear() - person.yearOfBirth);
        }
        if (person.age > maxAge) {
            oldest = person;
            maxAge = person.age;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
