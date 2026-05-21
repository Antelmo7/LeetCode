function fib(n: number): number {
    let numbers: number[] = [0, 1];
    let num: number;

    for (let i = 0; i <= n; i++) {
        console.log(numbers[i]);
        num = numbers[i];

        if (numbers[i - 1] === undefined || numbers[i - 1] === null) {
            continue;
        } else {
            const next: number = numbers[i - 1] + numbers[i]
            numbers.push(next);
        }
    }
    return num;
};