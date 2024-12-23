class Vehicles {
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  move(){
    console.log( 'gari cole na cole na re ');
  }
}

class Bus extends Vehicles{
  constructor(name, price, seat, ticketprice){
    super(name, price);
    this.seat = seat;
    this.ticketprice = ticketprice;
  }

}

class Truck extends Vehicles{
  constructor(name, price, load){
    super(name, price);
    this.load = load;
     
  }
}