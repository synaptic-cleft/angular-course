import {Injectable} from '@angular/core';
import {Person} from '../model/person';

@Injectable()
export class PeopleService {
    people: Person[] = [
        {name: "Frank", lastname: "Muscles", mail: "frank@muscles.com", editMode: false},
        {name: "Eddy", lastname: "Valentino", mail: "eddy@valfam.co.uk", editMode: false}
      ]

  addPerson(value) {
    this.people.push(value);
  }

  edit(p) {
    p.editMode = true;
  }

  save(p) {
    p.editMode = false;
  }

  delete(p) {
    let index = this.people.indexOf(p);
    this.people.splice(index, 1);
  }
}