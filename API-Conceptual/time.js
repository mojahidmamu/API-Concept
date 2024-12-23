//1.GET DATE
const date = new Date().getDate();
console.log(date);
// 2.GET FULL YEAR
const year = new Date().getFullYear();
console.log(year);
// 3.GET MONTH
const month = new Date().getMonth() + 1;
console.log(month);
// 4.GET DAY
const day = new Date().getDay();
const days =['Sunday', 'Monday', 'Tuesday', 'Saturday', 'Wednesday', 'Thursday', 'Friday'];
console.log(days[day]);
// 5.DATE NOW
Date.now();
// 6.GET TIME
const time = new Date().getTime();
console.log(time);
// 7.GET HOURS
const hours =  new Date().getHours();
console.log(hours);
// 8.GET MINUTES
const minutes = new Date().getMinutes();
console.log(minutes);

// 9.GET CURRENT DATE
let today = new Date();
     //  
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
     // January is 0!
let yyyy = today.getFullYear();
today = dd + '-' + mm + '-' + yyyy;
console.log(today);
