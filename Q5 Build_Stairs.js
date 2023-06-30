/* <aside>
💡 **Question 5**
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

Given the integer n, return *the number of **complete rows** of the staircase you will build*.

**Example 1:**

[]()

![v2.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4bd91cfa-d2b1-47b3-8197-a72e8dcfff4b/v2.jpg)

**Input:** n = 5

**Output:** 2

**Explanation:** Because the 3rd row is incomplete, we return 2.

</aside> */


function buildStairWithCoin(n){

    let successfullyCreatedStairs = 0;
    let coinUsedInStairs = 0;
      let row = 1;
       
      while(coinUsedInStairs + row <= n){
         coinUsedInStairs = coinUsedInStairs + row;
         row++;
         successfullyCreatedStairs++;
      }
      return successfullyCreatedStairs;
}

let Results = buildStairWithCoin(5);
console.log(Results);















function numberOfCompleteRows(n) {
    let completeRows = 0;
    let coinsUsed = 0;
    let row = 1;
  
    while (coinsUsed + row <= n) {
      coinsUsed += row;
      row++;
      completeRows++;
    }
  
    return completeRows;
  }
  
  // Example usage:
//   console.log(numberOfCompleteRows(5));  // Output: 2
  