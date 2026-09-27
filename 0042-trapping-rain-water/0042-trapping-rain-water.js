/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let totalTrapWater = 0;

    const prefixMax = new Array(height.length).fill(0);
    const suffixMax = new Array(height.length).fill(0);

    for (let i = 1; i < height.length; i++) {
        prefixMax[i] = Math.max(prefixMax[i - 1], height[i - 1]);
    }

    for (let i = height.length - 2; i >= 0; i--) {
        suffixMax[i] = Math.max(suffixMax[i + 1], height[i + 1]);
    }

    for (let i = 0; i < height.length; i++) {

        const currentTotalTrapWater = Math.min(prefixMax[i], suffixMax[i]) - height[i];

        if (currentTotalTrapWater > 0) {
            totalTrapWater = totalTrapWater + currentTotalTrapWater;
        }
    }

    return totalTrapWater;
};