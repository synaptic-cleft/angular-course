import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Output() add = new EventEmitter();
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(undefined, [Validators.required, Validators.pattern('^[A-Z]?[a-z]+$')]),
      lastname: new FormControl(undefined, [Validators.required]),
      mail: new FormControl(undefined, [Validators.required, Validators.email])
    })
  }

  addPersonViaForm() {
    this.add.emit(this.form.value);
  }

  ngOnInit() {
  }

}
