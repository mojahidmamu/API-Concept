function add(a , b){
   const total = a + b;
  console.log( a,b );
  if(b > 5){
    const sum = 15 + a + b;
    console.log( sum);
  }
  else{
    const sum = 5 + a + b;
    console.log( sum);
  }
  return total;
}
// console.log( a, b);
add(4, 20)