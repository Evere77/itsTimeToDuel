class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }

}

class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }
  
  attack(target){
    console.log( `${this.name} attacks ${target.name}` );
}
}

class Effect extends Card{
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  hardAlgorithm(){
    this.cost -= 2;
      console.log( `increase ${this.name}'s resilience by 3`);
      this.resilience += 3;
    }
    unhandledPromiseRejection(){
      this.cost -= 1;
      console.log( `reduce ${this.name}'s resilience by 2`);
      this.resilience -= 2;
    }
    pairPrograming(){
      this.cost -= 3;
      console.log( `increase ${this.name}'s power by 2`);
      this.power += 2;
    }
}

const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);

const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3 )

const unit2 = new Unit("black Belt Ninja", 4, 5, 4);


const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)

const effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2)

unit1.attack(unit2);