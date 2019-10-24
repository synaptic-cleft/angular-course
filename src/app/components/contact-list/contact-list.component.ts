import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  people;
  constructor(private peopleService: PeopleService) {}

  edit(p) {
    this.peopleService.edit(p)
  }

  save(p) {
    this.peopleService.save(p);
  }

  delete(p) {
    this.peopleService.delete(p)
  }

  ngOnInit() {
    this.people = this.peopleService.people;
  }

}
