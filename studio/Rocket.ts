import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket implements Payload{
    
    // properties and methods
    // properties and methods
    name: string;
    massKg: number;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    atronauts: Astronaut[];
    
    
    constructor(name: string, totalCapacityKg:number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    
    sumMass( items: Payload[] ){
        //sumMass( items: Payload[] ): number
        //Returns the sum of all items using each item's massKg property
     }
     currentMassKg(){
         //currentMassKg(): number
         //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
     }
     canAdd(item: Payload){
         //canAdd(item: Payload): boolean
         //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
     }
     addCargo(cargo: Cargo){
        //addCargo(cargo: Cargo)
        //Uses this.canAdd() to see if another item can be added.
        //If true, adds cargo to this.cargoItems and returns true.
        //If false, returns false.
     }
     addAstronaut(astronaut: Astronaut){
        //Uses this.canAdd() to see if another astronaut can be added.
        //If true, adds astronaut to this.astronauts and returns true.
        //If false, returns false
     }
 }
 