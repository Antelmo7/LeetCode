/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const open = ['(', '{', '['];
    const close = [')', '}', ']'];

    let stack = [];

    if((s.length % 2) > 0) {
        return false;
    }
    
    const toEval = Array.from(s);

    for(let i = 0; i <= toEval.length - 1; i++) {
        const char = toEval[i];
        if(open.includes(char)) {
            stack.push(char);
            console.log(stack);
        } else if (close.includes(char)) {
            const closeIndex = close.indexOf(char);
            if(closeIndex === -1 || open[closeIndex] !== stack[stack.length - 1]) {
                return false;
            } else if (open[closeIndex] === stack[stack.length - 1]) {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
};