function greeting ( greeting2, name){
    greeting2(name);
}
// const name = 'mojahid baba kemon aco';
// const number = 45;
// const laptop = {price: 12000, brand: HP, morory: '8gb'};
function greeting2(name){
  console.log( 'good morning-', name);
}

greeting(greeting2, 'mojahid');