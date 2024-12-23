// undefined ==> 8 ways to get  undefine
/** 1.variable that is not initialized will give undefine
    let first ;
     console.log( first);
 */
// 2.function with no return
// 3.parameter that is not passed will be undefined
// 4.if return has nothing on the right side will return undefined
// 5.property that doesn't exists on an  object will give you undefined
// 6.accessing array elements outside of the index range will give you undefined
// 7.deleting an element inside an array
// 8.set a value directly to undefined 
const sixth = [136, 544, 54, 12];
console.log( sixth[5]);
