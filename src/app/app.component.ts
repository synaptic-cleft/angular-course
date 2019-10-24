import { Component, ViewChild } from '@angular/core';
import { ContactListComponent } from './components/contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ContactListComponent, {static: false})
  private listComponent: ContactListComponent;

  handleAdd(mens) {
    this.listComponent.people.push(mens);
    console.log("hoi");
  }
}
