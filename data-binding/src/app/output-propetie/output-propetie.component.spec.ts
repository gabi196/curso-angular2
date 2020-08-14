import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropetieComponent } from './output-propetie.component';

describe('OutputPropetieComponent', () => {
  let component: OutputPropetieComponent;
  let fixture: ComponentFixture<OutputPropetieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPropetieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropetieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
