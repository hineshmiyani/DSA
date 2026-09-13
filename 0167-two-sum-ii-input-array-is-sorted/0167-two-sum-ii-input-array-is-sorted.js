/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    while (leftPointer < rightPointer) {

        const sum = numbers[leftPointer] + numbers[rightPointer];

        if (sum < target) {
            leftPointer = leftPointer + 1;
        } else if (sum > target) {
            rightPointer = rightPointer - 1;
        } else {
            return [leftPointer + 1, rightPointer + 1];
        }

    }

    return [-1, -1];
};