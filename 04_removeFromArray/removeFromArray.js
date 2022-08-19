const removeFromArray = function(arr, ...args) {
    const inputArr = arr;
    let removed = [];
    for (i=0; i < args.length; i++){
        for (j=0; j < inputArr.length; j++){
            if (inputArr[j] === args[i]){
                removed = inputArr.splice(j, 1);
                
            }
        }
    }
    return inputArr;

};

// Do not edit below this line
module.exports = removeFromArray;
