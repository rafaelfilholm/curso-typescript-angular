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

let carA = new Car("Hilux", 4);
carA.speedUp();
console.log(carA);