import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinyFormComponent } from './shiny-form.component';

describe('ShinyFormComponent', () => {
  let component: ShinyFormComponent;
  let fixture: ComponentFixture<ShinyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShinyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShinyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
