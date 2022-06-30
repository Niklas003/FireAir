import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionLocationComponent } from './mission-location.component';

describe('MissionLocationComponent', () => {
  let component: MissionLocationComponent;
  let fixture: ComponentFixture<MissionLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
