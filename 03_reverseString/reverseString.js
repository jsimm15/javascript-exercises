const reverseString = function(string) {

    const charArr = [];
    const revCharArr = [];
    let revString = '';

    for (i=0; i < string.length; i++){ //record input string as array of characters
        charArr[i] = string.slice(i, i+1);
    }
    for (i=0; i < string.length; i++){
        revCharArr[i]= charArr[string.length-(i+1)]; //create new array in reverse order. Alternately, use .reverse()
    }
    for (i=0; i < string.length; i++){ //concat each character into string
        revString += revCharArr[i];
    }

    return revString;
};

// Do not edit below this line
module.exports = reverseString;
