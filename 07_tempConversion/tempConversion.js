const ftoc = function(tempF) {
 // if (tempF === 32) return 0;
  const tempC = ((tempF - 32)*(5/9)).toFixed(1) ;
  return parseFloat(tempC);
};

const ctof = function(tempC) {
  const tempF = ((tempC*(9/5))+32).toFixed(1);
  return parseFloat(tempF);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
