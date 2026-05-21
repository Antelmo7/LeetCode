/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const payload = Array.from(s);
    let sum = 0;
    
    const romanNumbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    for(let i = 0; i <= payload.length - 1; i++) {
        let cur = romanNumbers[payload[i]];
        let nxt = romanNumbers[payload[i + 1]];

        if(cur < nxt) {
            sum -= cur;
        } else {
            sum += cur;
        }
    }

    return sum;
};