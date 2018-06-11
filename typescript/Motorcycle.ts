import Vehicle from './Vehicle'

class Motorcycle extends Vehicle { 
	public speedUp(): void {
		this.velocity = this.velocity + 20;
	}
}

export default Motorcycle;