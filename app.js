import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import connect from 'can-connect';
import SuperMap from 'can-connect/can/super-map/super-map';

export const Address = DefineMap.extend({
  street: {
    type: 'string'
  },
  number: {
    type: 'number'
  }
});

export const Person = DefineMap.extend({
  name: { type: 'string' },
  address: {
    Type: Address
  }
});

Person.List = DefineList.extend({
  '#': Person
});

export const PersonConnection = window.PersonConnection = SuperMap({
  Map: Person,
  List: Person.List,
  url: '/persons'
});

let myPerson = new Person({
  id: 1,
  name: 'Ilya',
  address: {
    street: 'Yonge',
    number: 1000
  }
});

console.log(`myPerson1._cid = ${myPerson._cid}`);
PersonConnection.addInstanceReference(myPerson);
console.log(`instanceStore._cid = ${PersonConnection.instanceStore.get(1)._cid}`);


PersonConnection.deleteInstanceReference(myPerson);

myPerson = new Person({
  id: 1,
  name: 'Petya'
});
console.log(`myPerson2._cid = ${myPerson._cid}`);
PersonConnection.addInstanceReference(myPerson);
console.log(`instanceStore._cid = ${PersonConnection.instanceStore.get(1)._cid}`);