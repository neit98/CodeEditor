import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user1 = new User();
const company1 = new Company();
const customMap = new CustomMap('map');
customMap.addMaker(user1);
customMap.addMaker(company1);
