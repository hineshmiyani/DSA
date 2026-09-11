/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;


    const sortedNums = [...new Set(nums)].sort((a, b) => a - b); // [1,2,3,4,100,200]


    let maxSequence = 1; // 4
    let currentSequence = 1; // 1

    for (let i = 1; i < sortedNums.length; i++) {

        if ((sortedNums[i - 1] + 1) === sortedNums[i]) { // 101===200
            currentSequence = currentSequence + 1; 
        } else {
            currentSequence = 1;
        }

        maxSequence = Math.max(maxSequence, currentSequence);

    }

    return maxSequence;
};