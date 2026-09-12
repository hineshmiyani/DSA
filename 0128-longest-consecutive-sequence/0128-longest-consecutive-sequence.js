/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;


    const numsSet = new Set(nums);

    let maxSequence = 1;

    for (let currentNum of numsSet) {

        let currentSequence = 1;

        if (!numsSet.has(currentNum - 1)) {

            numsSet.delete()
            while (numsSet.has(currentNum + 1)) {
                numsSet.delete(currentNum + 1);
                
                currentSequence = currentSequence + 1;
                currentNum = currentNum + 1;
            }
        }

        maxSequence = Math.max(maxSequence, currentSequence);
    }

    return maxSequence;
};