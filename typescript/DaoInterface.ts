export default interface DaoInterface<Type> {
	/*
	*	Table name
	*/
	tableName: string;

	/*
	* Insert a new object
	* @param {Type} object
	* @returns {boolean}
	*/
	insert(object: Type): boolean;
	
	/*
	* Update a object
	* @param {Type} object
	* @returns {boolean}
	*/
	update(object: Type): boolean;

	/*
	* Delete a object
	* @param {number} id
	* @returns {Type}
	*/
	delete(id: number): Type;

	/*
	* Find a object
	* @param {id} number
	* @returns {Type}
	*/
	find(id: number): Type;

	/*
	* Get all objects
	* @returns {Type[]}
	*/
	all(): Type[];
}