function sum(a, b, c){
  // console.log(typeof arguments[3]);
  const args = [...arguments];
  // console.log( args);
  const result = a + b + c;
  return result;
}
// console.log( sum(10,20, 30));
const total = sum(10, 20, 30, 45, 35);
// console.log( total);