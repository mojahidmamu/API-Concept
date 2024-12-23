const numbers = [10, 15, 41, 48, 40, 38, 42];

const result = numbers.filter((item) => item > 15 && item % 2 == 0);
console.log(result);