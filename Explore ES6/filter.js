// filter selects elements based on a condition and returns an array with the elements that fulfiled the condition.
const numbers = [1, 5, 9, 11];

const players = [60, 75, 65, 89, 63, 55, 70];
// const selector = players.filter(players => players >= 70)
// const selector = players.filter(players => players % 2 === 1)
const selector = players.filter(players => players % 2 === 0)
console.log( selector);