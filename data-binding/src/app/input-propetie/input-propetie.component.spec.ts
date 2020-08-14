import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropetieComponent } from './input-propetie.component';

describe('InputPropetieComponent', () => {
  let component: InputPropetieComponent;
  let fixture: ComponentFixture<InputPropetieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPropetieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropetieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
