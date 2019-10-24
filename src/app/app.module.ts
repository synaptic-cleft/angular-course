import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { PeopleService } from './services/people.service';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { DateFinderComponent } from './pages/date-finder/date-finder.component';

@NgModule({
  declarations: [
    AppComponent,
    FullnamePipe,
    ContactFormComponent,
    ContactListComponent,
    DateFinderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
