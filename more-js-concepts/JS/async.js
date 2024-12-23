const myLoader = () => {
  return new Proomise((resolve, reject) => {
     const success = Math.random();
     if(success <= 0.5){
      resolve(success)
     }
     else{
      reject(success)
     }
  })
};
    
myLoader();
.then(data => console.log('resolved data', data))
.catch(err => console.log('resolved with data', err))

fetch('')
    .then(res => res.json)
    .then(data => console.log(data ))
    .catch(err => console.log(err))

 async function loadData(){
  const res = await fetch('');
  const data = await res.json();
  console.log(data);
};

const taskloader = async ( ) => {
  const res = await fetch('');
};
loadData();


console.log(1);
