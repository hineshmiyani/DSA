/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    const numberFrequencyMap = new Map(); // { 1:3, 2:2, 3:1}
    const countArr = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        if (numberFrequencyMap.has(currentNum)) {
            numberFrequencyMap.set(currentNum, numberFrequencyMap.get(currentNum) + 1);
        } else {
            numberFrequencyMap.set(currentNum, 1);
        }
    }

    for (let [uniqueNumber, count] of numberFrequencyMap) {
        if (countArr[count] && Array.isArray(countArr[count])) {
            countArr[count].push(uniqueNumber);
        } else {
            countArr[count] = [uniqueNumber];
        }
    }

    const result = [];

    for (let i = countArr.length - 1; i >= 0; i--) {
        const item = countArr[i];

        if (item) {
            result.push(...item);

            if (result.length >= k) {
                return result.slice(0, k);
            }
        }
    }
};