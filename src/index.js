
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix === undefined) return result;
  for (let i = 0; i < matrix.length; i++) {
    let matrixElement = matrix[i];
    if (i !== 0 && i % 2 !== 0) {
      let reversedArray = matrixElement.reverse();
      for (let j = 0; j < reversedArray.length; j++) {
        result.push(reversedArray[j]);
      }
    } else {
      for (let k = 0; k < matrixElement.length; k++) {
        result.push(matrixElement[k]);
      }
    }
  }
  return result;
}
