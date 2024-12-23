const players = [6, 7, 6, 8, 3, 5, 7];
const total = players.reduce((previous, current) => previous + current, 0)
// console.log( total);

const sum = players.reduce((p, c) =>  p + c)
console.log( sum);