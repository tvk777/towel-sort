
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length===0) return [];
  return matrix.reduce(
    (total, arr, index) => {
      index%2===0 ? arr.sort((a,b) => a-b) : arr.sort((a,b) => b-a)
      return total.concat(arr)
      }
    );
};
