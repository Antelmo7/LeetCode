/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    const payload = Array.from(strs[0].toLowerCase());

    if(strs.length === 1) {
        return strs[0];
    }

    for(let i = 0; i <= payload.length - 1; i++) {
        let haveLetter = false;

        for(let j = 1; j <= strs.length - 1; j++) {
            if (strs[j][i] === payload[i]) {
                haveLetter = true;
            } else {
                haveLetter = false;
                break;
            }
        }

        if(haveLetter) {
            prefix += payload[i];
        } else {
            break;
        }
    }

    return prefix;
};