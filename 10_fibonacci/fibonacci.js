const fibonacci = function(num) {
    if (num < 1) return 'OOPS';
    const fibArr = [];
    for (i=0; i <num; i++){
        if (i <= 1){
            fibArr[i] = 1;
        }
        else {
            fibArr[i] = (fibArr[i-2]+fibArr[i-1]);
        };
    }
    return fibArr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
