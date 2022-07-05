
// You should implement your task here.

// module.exports = function towelSort (matrix) {
//   return [];
// }

module.exports = function towelSort (matrix) {
  let nul = [];
  if(matrix === undefined || matrix.length === 0) {
  return nul;
  }

  let b;
  let resultReversed = [];
  let result = [];
  
  for(let c = 0; c < matrix.length; c++) {
    if (c % 2 === 0) {
    resultReversed.push(matrix[c]);
    } else {
      b = matrix[c].reverse();
      resultReversed.push(b);
    }
  }
  
  let stringRes = resultReversed.join();
  let stringSplit = stringRes.split(",");
  
  for(let i = 0; i < stringSplit.length; i++) {
    let b = Number(stringSplit[i]);
    result.push(b);
  }

  return result;
}