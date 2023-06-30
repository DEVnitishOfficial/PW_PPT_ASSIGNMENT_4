/* <aside>
💡 **Question 3**
Given a 2D integer array matrix, return *the **transpose** of* matrix.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

**Example 1:**

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [[1,4,7],[2,5,8],[3,6,9]]

</aside> */

// 1  2  3         1  4  7      
// 4  5  6     →   2  5  8 
// 7  8  9         3  6  9

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    // Create a new matrix with switched rows and columns
    const transposedMatrix = [];
    for (let col = 0; col < cols; col++) {
      const newRow = [];
      for (let row = 0; row < rows; row++) {
        newRow.push(matrix[row][col]); // for ex. row[0]col[0] = 1, matrix[1][0] = 4, matrix[2][0] = 7  .......
      }
      transposedMatrix.push(newRow);
    }
      
    return transposedMatrix;
  }
  const matrix = [[1,2,3],[4,5,6],[7,8,9]];
  const transposed = transposeMatrix(matrix);
  console.log(transposed);
    