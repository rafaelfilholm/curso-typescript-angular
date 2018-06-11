import Car from './Car';
import Motorcycle from './Motorcycle';

let car = new Car("Veloster", 4);
car.speedUp();
car.speedUp();

let moto = new Motorcycle();
moto.speedUp();
moto.speedUp();

console.log(car);
console.log(moto);