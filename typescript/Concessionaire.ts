import Car from './Car';

export default class Concessionaire {
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