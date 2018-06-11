import Car from "./Car";
import Concessionaire from "./Concessionaire";
import Person from "./Person";

/* Create cars objects */ 
let carA = new Car("Camaro", 4);
let carB = new Car("Veloster", 4);
let carC = new Car("Celta", 2);

/* Create concessionaire's cars list  */ 
let carsList: Car[] = [carA, carB, carC];

let concessionaire = new Concessionaire("Av. Santos Dumont", carsList);

/* Show cars lists */
// console.log(concessionaire.getCarsList())

/* Create a new customer */
let customer = new Person("Rafael", "Veloster");

/* Check if favorite car is in concessionaire */ 
concessionaire.getCarsList().map((car: Car)=>{
    if(car['model'] == customer.getFavoriteCar()){
        /* Buy car */
        customer.buyCar(car);
    }
});

/* Get customer's car */ 
console.log(customer.getCar())