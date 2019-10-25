import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFinderComponent } from './date-finder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// integration test this
fdescribe('DateFinderComponent', () => {
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

    const todayOption = (fixture.nativeElement as HTMLElement).querySelector('option');
    const list = fixture.nativeElement.querySelectorAll('li');
    expect(list.length).toBe(4);
    expect(todayOption.value).toBe("today");
  });
});
