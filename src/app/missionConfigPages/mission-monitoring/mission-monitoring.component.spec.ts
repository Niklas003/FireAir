import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionMonitoringComponent } from './mission-monitoring.component';

describe('MissionMonitoringComponent', () => {
  let component: MissionMonitoringComponent;
  let fixture: ComponentFixture<MissionMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionMonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
