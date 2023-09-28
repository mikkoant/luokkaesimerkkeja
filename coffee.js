class CoffeeMachine {
  #waterAmount = 0; // yksityinen jäsenmuuttuja
  setWaterAmount(value) {
    //julkinen metodi
    this.#waterAmount = value;
  }

  getWaterAmount() {
    //julkinen metodi
    return this.#waterAmount;
  }
  constructor(power) {
    this.power = power;
    console.log(`Created a coffee-machine, power: ${power}`);
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

console.log(coffeeMachine.power);
// add water
//coffeeMachine.#waterAmount = 200; //ei toimi enää
coffeeMachine.setWaterAmount(200);
//console.log(coffeeMachine.#waterAmount); // ei toimi enää
console.log(coffeeMachine.getWaterAmount());
