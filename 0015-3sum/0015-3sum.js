/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    const triplets = [];

    const sortedNums = nums.sort((a, b) => a - b); // [0, 0, 0, 0, 0, 1, 1, 2]

    const n = sortedNums.length;

    for (let i = 0; i < n; i++) {

        if (i !== 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue;
        }

        let leftPointer = i + 1;
        let rightPointer = n - 1;

        while (leftPointer < rightPointer) {

            const currentSum = sortedNums[i] + sortedNums[leftPointer] + sortedNums[rightPointer];

            if (currentSum < 0) {
                leftPointer = leftPointer + 1;

            } else if (currentSum > 0) {
                rightPointer = rightPointer - 1;

            } else {

                triplets.push([sortedNums[i], sortedNums[leftPointer], sortedNums[rightPointer]]);

                leftPointer = leftPointer + 1;
                rightPonter = rightPointer - 1;

                while (leftPointer < rightPointer && sortedNums[leftPointer] === sortedNums[leftPointer - 1]) {
                    leftPointer = leftPointer + 1;
                }

                while (rightPointer > leftPointer && sortedNums[rightPointer] === sortedNums[rightPointer + 1]) {
                    rightPointer = rightPointer - 1;
                }
            }


        }
    }

    return triplets;
};