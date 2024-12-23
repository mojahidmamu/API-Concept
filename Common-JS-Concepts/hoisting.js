print10();
for (let i = 0; i < 5; i++) {
  // console.log(i);
}
// console.log('outside', i);
function print4() {
  console.log( 4);
}
print10();
const print10 = function () {
  console.log('insie print10', 10);
}

