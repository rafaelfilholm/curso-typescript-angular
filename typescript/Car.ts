import Vehicle from './Vehicle'

export default class Car extends Vehicle {
	private qtyPorts: number;

	constructor(model: string, qtyPorts: number){
		super();
		this.model = model;
		this.qtyPorts = qtyPorts;
	}
}