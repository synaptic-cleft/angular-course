import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  people: Person[] = [
    {name: "Frank", lastname: "Muscles", mail: "frank@muscles.com", editMode: false},
    {name: "Eddy", lastname: "Valentino", mail: "eddy@valfam.co.uk", editMode: false}
  ]

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

  ngOnInit() {
  }

}
