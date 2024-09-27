/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 
var closeStrings = function(word1, word2) {

    if (word1.length !== word2.length) return false;

    const freq1 = new Map();
    const freq2 = new Map();

    for (let char of word1) {
        freq1.set(char, (freq1.get(char) || 0) + 1);
    }

    for (let char of word2) {
        freq2.set(char, (freq2.get(char) || 0) + 1);
    }

    const uniqueChars1 = Array.from(freq1.keys()).sort();
    const uniqueChars2 = Array.from(freq2.keys()).sort();
    if (uniqueChars1.join('') !== uniqueChars2.join('')) return false;

    const freqValues1 = Array.from(freq1.values()).sort((a, b) => a - b);
    const freqValues2 = Array.from(freq2.values()).sort((a, b) => a - b);
    return freqValues1.join('') === freqValues2.join('');
};