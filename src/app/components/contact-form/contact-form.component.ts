import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  constructor(private peopleService: PeopleService) {}

  addPersonViaForm() {
    this.peopleService.addPerson(this.form.value);
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(undefined, [Validators.required, Validators.pattern('^[A-Z]?[a-z]+$')]),
      lastname: new FormControl(undefined, [Validators.required]),
      mail: new FormControl(undefined, [Validators.required, Validators.email])
    })
  }

}
