function kithchen(){
  let roast = 0;
  return function(){
    roast++;
    return roast;

  } 
}
const firstServer = kithchen();
console.log( firstServer());
console.log( firstServer());
console.log( firstServer());
console.log( firstServer());

