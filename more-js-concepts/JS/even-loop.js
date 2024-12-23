function a() {
  console.log("a");
  b();
  console.log("aa");
}
function b() {
  console.log("b");
  d();
  console.log("bb");
}
function d() {
  console.log("d");
  e();
  console.log("dd");
}
function e() {
  console.log("e");
  console.log("ee");
}

function x() {
  console.log("x");
  y();
  console.log("xx");
}
function y() {
  console.log("y");
  z();
  console.log("yy");
}
function z() {
  console.log("z");
  console.log("zz");
}
fetch(" https://jsonplaceholder.typicode.com/todos/1 ")
  .then((res) => res.json)
  .then((data) => console.log(json));
x();
// a();
      
 