import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightComponentComponent } from './flight-component.component';

describe('FlightComponentComponent', () => {
  let component: FlightComponentComponent;
  let fixture: ComponentFixture<FlightComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
