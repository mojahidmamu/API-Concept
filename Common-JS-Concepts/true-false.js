/**
 Truthy:
 1.true
 2.any number (+ve, -ve) will be truthy other than 0
 3.any string is thuthy
 4.any string other than empty string
 5.'0' is trulthy
 6.'false' ==>>>  is truthy
 7. {} is truthy
 8. [] is truthy
 9. 


 False
 1.false
 2.0
 3."" (empty string) 
 4.undefined 
 5. null is falsy
 6.

 */
// const a = {};
const a = 'mojahid';
if(a){
  // console.log( 'value of a is truthy');
}
else{
  // console.log( 'value of a is falsy');
}
// optional
// check falsy
const x = '';
if(!x){
  console.log( 'value of falsy');
}

// chcke truthy
const z = '';
if(!!z){
  console.log( 'value of truthy');
}