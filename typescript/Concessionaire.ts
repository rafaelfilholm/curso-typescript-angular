import ConcessionaireInterface from './ConcessionaireInterface';
import Car from './Car';

export default class Concessionaire implements ConcessionaireInterface {
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

	public getWorkingHours(): string{
		return "Open from 08:00 a.m. to 5:00 p.m. on week.";
	}
}