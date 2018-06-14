import DaoInterface from './DaoInterface';
import Concessionaire from './Concessionaire';

export default class ConcessionaireDao implements DaoInterface {
	tableName = "concesionaire";

	public insert(object: Concessionaire): boolean {
		console.log("Method insert concessionaire");
		return true;
	}

	public update(object: Concessionaire): boolean {
		console.log("Method update concessionaire");
		return true;
	}

	public delete(id: number): Concessionaire {
		console.log("Method delete concessionaire");
		return new Concessionaire('', []);
	}
	
	public find(id: number): Concessionaire {
		console.log("Method find concessionaire");
		return new Concessionaire('', []);
	}

	public all(): Concessionaire[]{
		console.log("Method all concessionairies");
		return [new Concessionaire('', [])];
	}
}