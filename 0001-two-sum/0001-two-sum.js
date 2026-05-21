/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexes = [0, 1];

    for(let i = 0; i < nums.length - 1; i++) {
        let numToFind = target - nums[i];

        const payload = nums.slice(i + 1);
        const index = payload.indexOf(numToFind);

        if(index >= 0) {
            indexes[0] = i;
            indexes[1] = index + i + 1;
        }
    }

    return indexes;
};