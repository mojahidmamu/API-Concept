// const numbers = [1, 5, 3, 2];
// let sum = 0;
// for(let item of numbers){
//   sum+= item;
// }
// let multi = 1;
 
// for(let item of numbers){
//   multi*= item;
// }

// console.log(multi);
const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((previous, current) => previous + current, 0);
// const multi = numbers.reduce((previous, current) => previous * current, 1);
// console.log(multi);

const number = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
const total = number.reduce((prev, curr) => prev + curr.a, 0);
console.log( total);