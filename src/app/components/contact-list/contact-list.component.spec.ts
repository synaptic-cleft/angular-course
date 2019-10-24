import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import { FullnamePipe } from 'src/app/pipes/fullname.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleService } from 'src/app/services/people.service';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    let mockService = jasmine.createSpyObj('peopleService', ['edit', 'save', 'delete'])
    TestBed.configureTestingModule({
      declarations: [
        ContactListComponent,
        FullnamePipe
      ],
      imports: [
        FormsModule
      ],
      providers: [
        {provide: PeopleService, useValue: mockService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
