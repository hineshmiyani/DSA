/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    const result = new Array(nums.length).fill(1); // [1, 1, 2, 6]
    // const result = new Array(nums.length).fill(1); // [24, 12, 8, 6]
   

    // Prefix Sum

    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1]; 
    }

    // Suffix Sum

    let suffixSum = 1; // 1, 4, 12, 24
    for (let i = nums.length - 1 - 1; i >= 0; i--) {
        result[i] = result[i] * suffixSum * nums[i + 1];  // 1 * 12 * 2
        suffixSum = suffixSum * nums[i + 1]; // 24
    }

    return result;
};