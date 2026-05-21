/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringNum = x.toString();
    const payload = Array.from(stringNum);

    const reversedPayload = payload.reverse();
    const reversedStringNum = reversedPayload.join('');

    const reversedNum = parseInt(reversedStringNum);

    if (reversedNum === x) return true;
    else return false;
};