/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
    return n ++; 
    };
};


const counter = createCounter(100)

counter() // 101
counter() // 102
counter() //103
