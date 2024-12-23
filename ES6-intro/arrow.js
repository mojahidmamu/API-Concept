function add(a, b) {
  const result = a + b;
  return result;
}
// console.log(add(10, 20));
// arrow function 
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

const sum = add3(11, 30)
const total = add4(10, 20, 25, 25);

console.log( add3(10, 20));
console.log( total);
// console.log( sum);

const defference  = (a, b) => a -b;
const multifly = (first, second, third) => first * second * third;

const student = {name: 'mojahid', age: 18}

const getAge = (person) => person.age;
const age = getAge(student)
console.log( age);

// this is not working
const getThird = numbers => numbers[2];
const third = ( getThird[10, 15, 20, 30])
console.log(third);

// no parameteer
// const getPI = () => Math.PI
// console.log( getPI());

// large arrow function
const doMath = (a, b, c) => {
  const sum = a + b + c;
  const mult = a * b * c;
  const result = sum + mult;
  return result;
}
console.log( 10, 20,15);
const getPI = () => Math.PI;
console.log( getPI());