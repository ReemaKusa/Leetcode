/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
        const mappedArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(fn(arr[i], i));
    }
    
    return mappedArray;
};

const arr = [1, 2, 3, 4];
const fn = (n, i) => n * 2;

console.log(map(arr, fn)); 