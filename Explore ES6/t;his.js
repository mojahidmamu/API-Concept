class person {
  constructor(name, age){
    this.name = name;
    this.age = age;

  }
  sleep(){
      console.log( `sleeping now ${this.name}`)
  }
   
}

const kodom = new person('kodom ali ', 18);
console.log( kodom);
 kodom.sleep();