import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainComponentComponent } from './train-component.component';

describe('TrainComponentComponent', () => {
  let component: TrainComponentComponent;
  let fixture: ComponentFixture<TrainComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
