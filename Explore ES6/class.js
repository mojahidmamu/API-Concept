const products = [
  {id: 1, name: 'laptop', price: 15000},
  {id: 2, name: 'mac', price: 1000},
  {id: 3, name: 'iphone', price: 50000},
  {id: 4, name: 'desktop', price: 115000},
]
// similar
class product{
  speak(talk){
    console.log( `talking about ${talk}`);
  }
}
const lenovo = new product()
// console.log( lenovo);
// lenovo.speak('kire mojahid vala asos ni toi')

class Teacher {
   constructor(name, subject, ){
    this.name = name;
    this.subject = subject;
   }
   lecture(){
    console.log( 'sir is teaching Math')
   }
}
const tapan = new Teacher('Tapan sir', 'physics')
console.log( tapan);