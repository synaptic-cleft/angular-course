import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFinderComponent } from './date-finder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DateFinderComponent', () => {
  let component: DateFinderComponent;
  let fixture: ComponentFixture<DateFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFinderComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
