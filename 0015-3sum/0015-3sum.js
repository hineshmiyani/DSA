/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    const triplets = [];

    nums.sort((a, b) => a - b); // [0, 0, 0, 0, 0, 1, 1, 2]

    const n = nums.length;

    for (let i = 0; i < n; i++) {

        if (i !== 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let leftPointer = i + 1;
        let rightPointer = n - 1;

        while (leftPointer < rightPointer) {

            const currentSum = nums[i] + nums[leftPointer] + nums[rightPointer];

            if (currentSum < 0) {
                leftPointer = leftPointer + 1;

            } else if (currentSum > 0) {
                rightPointer = rightPointer - 1;

            } else {

                triplets.push([nums[i], nums[leftPointer], nums[rightPointer]]);

                leftPointer = leftPointer + 1;
                rightPonter = rightPointer - 1;

                while (leftPointer < rightPointer && nums[leftPointer] === nums[leftPointer - 1]) {
                    leftPointer = leftPointer + 1;
                }

                while (rightPointer > leftPointer && nums[rightPointer] === nums[rightPointer + 1]) {
                    rightPointer = rightPointer - 1;
                }
            }


        }
    }

    return triplets;
};