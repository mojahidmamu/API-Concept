const petOwner = {
  name: 'mojahid',
  contact: {
    phone: 130762,
    email: 'mojahid@gmail.com',
  },
  pet: {
    name: 'samim', 
    info: {
      color: 'black',
      weitht: '10-kg'
    },
  },
  food:['apple', 'orange', 'malta'],
};
console.log( petOwner?.food[0]);
// console.log(petOwner.contact.phone);
// console.log(petOwner.pet.info.color);
// console.log(petOwner.address);
// console.log(petOwner.address?.houseNo);

// optional chaining ?.