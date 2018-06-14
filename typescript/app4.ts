import ConcessionaireDao from './ConcessionaireDao';
import Concessionaire from './Concessionaire';

import PersonDao from './PersonDao';
import Person from './Person';

let concessionaireDao: ConcessionaireDao = new ConcessionaireDao();
let concessionaire = new Concessionaire('', []);

let personDao: PersonDao = new PersonDao();
let person = new Person('', '');

concessionaireDao.insert(concessionaire);
personDao.insert(person);