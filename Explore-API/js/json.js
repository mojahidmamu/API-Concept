const user = { id: 1, name: 'mojahid', job: 'student'};
// JacaScript Object Notation
const stringifyed = JSON.stringify(user);
// console.log(stringifyed);
// console.log(user);
// console.log(JSON.stringify(user));
const shop = {
  name: 'mojahid', 
  address: {
    thana: 'gazipur', 
    district: 'Dhaka', 
    country: 'Bangladesh'
  },
  products: ['laptop', 'mac', 'iphone', 'mobile'],
  isOpen: true,
  isNew: false, 
};
console.log(shop);
console.log(JSON.stringify(shop));
// console.log(JSON.parse(shop));