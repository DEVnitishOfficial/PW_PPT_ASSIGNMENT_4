/* <aside>
💡 **Question 7**
You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return *the number of maximum integers in the matrix after performing all the operations*

**Example 1:**

// 0 0 0       1 1 0      2 2 1
// 0 0 0   →   1 1 0  →   2 2 1
// 0 0 0       0 0 0      1 1 1

**Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

**Output:** 4

**Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4.

</aside> */
  
function maxCount(m, n, ops) {
    
    let minX = Math.min(m, ...ops.map(([row]) => row));
    let minY = Math.min(n, ...ops.map(([col]) => col));
    return minX * minY;              
  }
  
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  const maxIntegers = maxCount(m, n, ops);
  
  const matrix = Array(m).fill().map(() => Array(n).fill(0));
  for (const [row, col] of ops) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        matrix[i][j]++;
      }
    }
  }
  
  console.log("Matrix:");
  matrix.forEach(row => console.log(row.join(" ")));
  
  console.log("Maximum number of 2 after operation:", maxIntegers);
  