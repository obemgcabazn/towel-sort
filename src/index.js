
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let concatArray = [];

  if (Array.isArray(matrix)) {
    if ( matrix.length != 0 ) {

      for ( let i = 0; i < matrix.length; i++ ) {
        concatArray = ( i % 2 === 0) ? concatArray.concat(matrix[i]) : concatArray.concat(matrix[i].reverse());
      }

    }
  }

  return concatArray;
}
