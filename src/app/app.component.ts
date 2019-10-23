import { Component } from '@angular/core';
import { Person } from './model/person';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex1';

  newPerson: Person = {} as Person;

  people: Person[] = [
    {name: "Frank", lastname: "Muscles", mail: "frank@muscles.com", editMode: false},
    {name: "Eddy", lastname: "Valentino", mail: "eddy@valfam.co.uk", editMode: false}
  ]

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(undefined, [Validators.required, Validators.pattern('^[A-Z]?[a-z]+$')]),
      lastname: new FormControl(undefined, [Validators.required]),
      mail: new FormControl(undefined, [Validators.required, Validators.email])
    })
  }

  addPersonViaForm() {
    this.people.push(this.form.value)
  }

  addPerson() {
    this.newPerson.editMode = false;
    this.people.push(this.newPerson)
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
