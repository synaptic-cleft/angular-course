import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-finder',
  templateUrl: './date-finder.component.html',
  styleUrls: ['./date-finder.component.css']
})
export class DateFinderComponent implements OnInit {

  form: FormGroup;
  constructor() { }

  chooseDate() {
    console.log("This doesn't do shit man");
  }
  
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(undefined, [Validators.required, Validators.pattern('^[A-Z]?[a-z]+$')]),
      lastname: new FormControl(undefined, [Validators.required]),
      date: new FormControl(undefined, [Validators.required])
    })
  }

}
