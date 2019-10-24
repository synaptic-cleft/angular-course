import {Injectable, OnInit} from '@angular/core';
import {Person} from '../model/person';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeopleService {
  people: Person[] = [];
  constructor(private http: HttpClient){
    console.log("asdf");

    this.http.get<Person[]>("http://localhost:3000/people").subscribe(value => {
      console.log("hi");
      value.map(p => this.people.push(p))
    })
  }

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