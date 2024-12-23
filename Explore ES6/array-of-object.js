const products = [
  {id: 1, name: 'laptop', price: 15000},
  {id: 2, name: 'mac', price: 1000},
  {id: 3, name: 'iphone', price: 50000},
  {id: 4, name: 'desktop', price: 115000},
]
// map 
// const names = products.map(products => products.price)
const names = products.map(p => p.price)
// console.log( names);
const expensive = products.filter(p => p.price > 15000)
// console.log( expensive);

// find
const affordable = products.find(p => p.price > 15000)
// console.log( affordable);

// reduce
const total = products.reduce ((previous, current ) => previous + current.price , 0)
console.log( total);