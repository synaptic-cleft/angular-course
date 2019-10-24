import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
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
    spyOn(component.add, 'emit');

    component.form.value.name = "Franz";
    component.form.value.lastname = "von Assissi";
    component.form.value.mail = "franz@god.it";
    component.addPersonViaForm();

    expect(component.add.emit).toHaveBeenCalledWith({ name: "Franz", lastname: "von Assissi", mail: "franz@god.it" });
  })
});
