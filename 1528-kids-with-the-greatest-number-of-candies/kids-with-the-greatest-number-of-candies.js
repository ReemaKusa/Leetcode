/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    let maxCandies = Math.max(...candies);
    let result = candies.map(candy => candy + extraCandies >= maxCandies);
    
    return result;
    
};


let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));