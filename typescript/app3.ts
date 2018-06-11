import Car from './Car';
import Motorcycle from './Motorcycle';

let car = new Car("Veloster", 4);
let moto = new Motorcycle();

moto.speedUp();
car.speedUp();

console.log(car);
console.log(moto);