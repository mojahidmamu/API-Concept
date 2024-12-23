const numbers = [10, 15, 41, 48];
// let find = null;

// for(let item of numbers){
//   if(item > 15){
//     find  =item;
//     break;
//   }
// }
const result = numbers.find((item) => item > 15 && item % 2 == 0);
console.log(result);