import DaoInterface from './DaoInterface';
import Person from './Person';

export default class PersonDao implements DaoInterface {
	tableName = "persons";

	public insert(object: Person): boolean {
		console.log("Method insert person");
		return true;
	}

	public update(object: Person): boolean {
		console.log("Method update person");
		return true;
	}

	public delete(id: number): Person {
		console.log("Method delete person");
		return new Person('', '');
	}
	
	public find(id: number): Person {
		console.log("Method find person");
		return new Person('', '');
	}

	public all(): Person[]{
		console.log("Method all persons");
		return [new Person('', '')];
	}
}