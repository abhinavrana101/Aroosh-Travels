import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaComponentComponent } from './visa-component.component';

describe('VisaComponentComponent', () => {
  let component: VisaComponentComponent;
  let fixture: ComponentFixture<VisaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
