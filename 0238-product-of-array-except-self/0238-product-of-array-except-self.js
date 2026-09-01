/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    

    const prefixSum = new Array(nums.length).fill(1); // [1, 1, 2, 6]
    const suffixSum = new Array(nums.length).fill(1); // [24, 12, 4, 1]
    // Prefix Sum
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] * nums[i - 1]; 
    }

    // Suffix Sum
    for (let i = nums.length - 1 - 1; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] * nums[i + 1];

    }

    // Multipliaction
    for (let i = 0; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i] * suffixSum[i];
    }

    return prefixSum;
};