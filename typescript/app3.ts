import Car from './Car';
import Concessionaire from './Concessionaire';
import Motorcycle from './Motorcycle';

let car = new Car("Veloster", 4);
car.speedUp();
car.speedUp();

let concessionaire = new Concessionaire("", []);
console.log(concessionaire.getWorkingHours());

let moto = new Motorcycle();
moto.speedUp();
moto.speedUp();

console.log(car);
console.log(moto);