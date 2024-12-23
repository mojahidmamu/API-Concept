const glass = {
  name: 'glass', 
  color: 'golden',
  price: 12,
  isCleaned: true
}
console.log( glass);

// keys karisma: when i need only keys
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
console.log( keys);

// When i need only values
const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
console.log( values);

// sobgoal eksate
const pair = Object.entries(glass);
/**
 * [ 'name', 'color', 'price', 'isCleaned' ]
[ 'glass', 'golden', 12, true ]
[
  [ 'name', 'glass' ],
  [ 'color', 'golden' ],
  [ 'price', 12 ],
  [ 'isCleaned', true ]
  ]
 */
console.log( pair);