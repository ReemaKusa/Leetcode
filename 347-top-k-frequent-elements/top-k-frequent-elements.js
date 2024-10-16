/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
        const frequencyMap = new Map();
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    const bucket = Array(nums.length + 1).fill().map(() => []);
    for (let [num, freq] of frequencyMap.entries()) {
        bucket[freq].push(num);
    }
    const result = [];
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i].length > 0) {
            result.push(...bucket[i]);
        }
    }
    return result.slice(0, k);
};