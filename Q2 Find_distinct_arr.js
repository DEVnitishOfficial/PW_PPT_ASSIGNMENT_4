/* <aside>
💡 **Question 2**

Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

**Note** that the integers in the lists may be returned in **any** order.

**Example 1:**

**Input:** nums1 = [1,2,3], nums2 = [2,4,6]

**Output:** [[1,3],[4,6]]

**Explanation:**

For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

</aside> */


// TIME COMPLEXITY → O(n)  here n is the length of nums1 and nums2 array
// SPACE COMPLEXITY → O(m + n)

function createDistinctArr(nums1, nums2) {
    const nums1Unique = new Set(nums1); // if duplicte element found, set will remove that
    const nums2Unique = new Set(nums2);
  
    const nums1Result = []; // storing distinct nums1 result which are not present in nums2
    const nums2Result = []; // storing distinct nums2 reslut which are not present in nums1
  
    for (const num of nums1Unique) {  // time complexity O(n)
      if (!nums2Unique.has(num)) {  // checking every element of num either present in nums2Unique or not if not then it pushed into the nums1Result array
        nums1Result.push(num);
      }
    }
  
    for (const num of nums2Unique) {
      if (!nums1Unique.has(num)) {
        nums2Result.push(num);
      }
    }
  
    return [nums1Result, nums2Result];
  }
  const result = createDistinctArr( [1, 2, 3], [2, 4, 6]);
  console.log(result);
  