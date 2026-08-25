/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const numberFrequencyMap = new Map(); // { 1:3, 2:2, 3:1}

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        if (numberFrequencyMap.has(currentNum)) {
            numberFrequencyMap.set(currentNum, numberFrequencyMap.get(currentNum) + 1);
        } else {
            numberFrequencyMap.set(currentNum, 1);
        }
    }

    const reverseSortedNumberFrequencyEntries = Array.from(numberFrequencyMap.entries()).sort((a, b) => b[1] - a[1]);

    const result = [];

    for (let i = 0; i < k; i++) {
        result.push(reverseSortedNumberFrequencyEntries[i]?.[0]); 
    }

    return result;
};