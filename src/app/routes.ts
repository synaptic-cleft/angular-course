import {Route} from "@angular/router";
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { DateFinderComponent } from './pages/date-finder/date-finder.component';

export let routes: Route[] = [
    { path: 'date-finder', component: DateFinderComponent },
    { path: 'form', component: ContactFormComponent },
    { path: 'list', component: ContactListComponent }
]