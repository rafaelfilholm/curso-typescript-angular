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
    private carsList: any;

    constructor(address: string, carsList: any){
        this.address = address;
        this.carsList = carsList;
    }

    public getAddress(): string{
        return this.address;
    }

    public getCarsList(): any{
        return this.carsList;
    }
}