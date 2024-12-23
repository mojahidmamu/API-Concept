// object er donia

// const myInfo = {
//   name: 'mojahid',
//   age: 18,
//   address: 'chokoria',
//   sosurName: 'moktar', 
//   sosurBari: 'b-baria',
//   contact: {
//     phone: 130762,
//     email: 'mojahid@gmail.com'

//   },
// }
// const {contact:{email}} = myInfo
// console.log( contact);
// const {email} = contact;
// console.log( email);


// const {age:myAge} = myInfo
// console.log(myAge);
// const obj2 = {...myInfo};
// obj2.married = false;
// obj2.age = 48;

// console.log( myInfo);
// console.log( obj2);


// object access: dot notation and braket notation
const myInfo = {
  name: 'mojahid',
  age: 18,
  address: 'chokoria',
  sosurName: 'moktar', 
  sosurBari: 'b-baria',
  contact: {
    phone: 130762,
    email: 'mojahid@gmail.com'

  },
}
for(let key in myInfo){
  console.log(myInfo[key]);
}
