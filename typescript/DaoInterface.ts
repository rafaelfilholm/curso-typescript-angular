export default interface DaoInterface {
	/*
	*	Table name
	*/
	tableName: string;

	/*
	* Insert a new object
	* @param {any} object
	* @returns {boolean}
	*/
	insert(object: any): boolean;
	
	/*
	* Update a object
	* @param {any} object
	* @returns {boolean}
	*/
	update(object: any): boolean;

	/*
	* Delete a object
	* @param {number} id
	* @returns {any}
	*/
	delete(id: number): any;

	/*
	* Find a object
	* @param {id} number
	* @returns {any}
	*/
	find(id: number): any;

	/*
	* Get all objects
	* @returns {any[]}
	*/
	all(): any[];
}