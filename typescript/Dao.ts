import DaoInterface from './DaoInterface';

export default class Dao<Type> implements DaoInterface<Type> {
	tableName = "";

	public insert(object: Type): boolean {
		console.log("Method insert");
		return true;
	}

	public update(object: Type): boolean {
		console.log("Method update");
		return true;
	}

	public delete(id: number): Type {
		console.log("Method delete");
		return Object();
	}
	
	public find(id: number): Type {
		console.log("Method find");
		return Object();
	}

	public all(): Type[]{
		console.log("Method all");
		return [Object()];
	}
}