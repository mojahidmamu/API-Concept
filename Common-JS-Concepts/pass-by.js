
// premitive types are pass by value
let num1 = 10;
let num2 = 15;
function multipty(a, b) {
  a = 5;
  const result = a * b;
  return result;
}
// const output = multipty(num1, num2);
// console.log(output);
console.log( num1);
console.log( multipty(num1, num2));

// object and array are pass by reference
let student1 = {name: 'mojahid', patrner: 'momo'};
let student2 = {name: 'abir', patrner: 'somaiya'};
function makeMovie(couple1, couple2){
  couple1.name = 'samim';
  couple2.patrner = 'mim'
}
console.log( student1, student2);
makeMovie(student1, student2);
console.log( student1, student2);