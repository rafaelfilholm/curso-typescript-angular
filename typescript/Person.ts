import Car from './Car';

export default class Person {
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