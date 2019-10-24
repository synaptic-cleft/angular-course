import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleService } from 'src/app/services/people.service';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let mockPeopleService;

  beforeEach(async(() => {
    mockPeopleService = jasmine.createSpyObj('peopleService', ['addPerson']);

    TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [{provide: PeopleService, useValue: mockPeopleService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a working form', () => {
    component.form.value.name = "Franz";
    component.form.value.lastname = "von Assissi";
    component.form.value.mail = "franz@god.it";
    component.addPersonViaForm();

    expect(mockPeopleService.addPerson).toHaveBeenCalledWith({ name: "Franz", lastname: "von Assissi", mail: "franz@god.it" });
  })
});
