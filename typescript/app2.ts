class Car {
    private model: string;
    private qtyPorts: number;
    private velocity: number;

    constructor(model: string, qtyPorts: number){
        this.model = model;
        this.qtyPorts = qtyPorts;
        this.velocity = 0;
    }

    public speedUp(): void{
        this.velocity = this.velocity + 10;
    }

    public stop(): void{
        this.velocity = 0;
    }

    public currentVelocity(): number{
        return this.velocity;
    }
}

class Concessionaire {
    private address: string;
    private carsList: Car[];

    constructor(address: string, carsList: Car[]){
        this.address = address;
        this.carsList = carsList;
    }

    public getAddress(): string{
        return this.address;
    }

    public getCarsList(): Car[]{
        return this.carsList;
    }
}

class Person {
    private name: string;
    private favoriteCar: string;
    private car: any;

    constructor(name: string, favoriteCar: string) {
        this.name = name;
        this.favoriteCar = favoriteCar;
    }

    public getName(): string {
        return this.name;
    }

    public getFavoriteCar(): string{
        return this.favoriteCar;
    }

    public buyCar(car: Car): void{
        this.car = car;
    }

    public getCar(): Car{
        return this.car;
    }
}

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