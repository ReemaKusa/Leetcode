/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    let map = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (map.hasOwnProperty(nums[i]) && i - map[nums[i]] <= k) {
            return true;
        }
        map[nums[i]] = i;
    }
    
    return false;
};