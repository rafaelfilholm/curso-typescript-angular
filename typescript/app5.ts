import Concessionaire from './Concessionaire';
import Person from './Person';

import Dao from './Dao';

let concessionaireDao: Dao<Concessionaire> = new Dao<Concessionaire>();
let concessionaire = new Concessionaire('', []);
concessionaireDao.insert(concessionaire);

let personDao: Dao<Person> = new Dao<Person>();
let person = new Person('', '');
personDao.delete(5);