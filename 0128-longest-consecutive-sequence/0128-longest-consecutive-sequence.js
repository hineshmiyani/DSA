/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;


    const sortedNums = nums.sort((a, b) => a - b);


    let maxSequence = 1; // 4
    let currentSequence = 1; // 1

    for (let i = 0; i < sortedNums.length; i++) {

        if (sortedNums[i] === sortedNums[i + 1]) {
            continue;
        }

        if ((sortedNums[i] + 1) === sortedNums[i + 1]) { 
            currentSequence = currentSequence + 1; 
        } else {
            currentSequence = 1;
        }

        maxSequence = Math.max(maxSequence, currentSequence);

    }

    return maxSequence;
};