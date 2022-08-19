const palindromes = function (input) {
let reversed = input.replace(/[^A-Za-z]/g, '').split('').reverse().join('').toLowerCase();
let normal = input.replace(/[^A-Za-z]/g, '').toLowerCase();;

for (i=0; i<normal.length; i++){
    if (i === (normal.length-1)){
        if (normal[i] === reversed[i]){
            return true;
        }
        else return false;
    }
    else {
        if (normal[i] === reversed[i]){
            continue;
        }
        else {
            return false;
        } 
    }
    }
};

// Do not edit below this line
module.exports = palindromes;
