export default class Vehicle {
	protected model: string;
	private velocity: number = 0;

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