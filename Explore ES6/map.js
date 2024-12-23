// map ==> loops through each element of the array and do the opereation that you passed in the call back function and hold the result from each opration in an array and finally returns you the array

// This is very important and interesting

const numbers = [4, 5, 6, 10];
// const result = numbers.map()



// system-1

const doubled = [];
for (const num of numbers){
  const double = num *2;
  doubled.push(double)
}
// console.log(doubled);

