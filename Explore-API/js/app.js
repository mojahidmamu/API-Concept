// console.log('samim');
function loadData2(){
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then(res => res.json())
    .then((data) => console.log(data));
}

function loadUser(){
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then(res => res.json())
    .then((data) => console.log(data));
}

function loadUser3(){
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then(res => res.json())
    .then((data) => displyUsers(data));
}

function displyUsers(data){
   const ul = document.getElementById('user-list');
   for(const user of data ){
    console.log(user.name);
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);

   }
}