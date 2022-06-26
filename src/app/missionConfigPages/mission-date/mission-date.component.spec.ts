import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionDateComponent } from './mission-date.component';

describe('MissionDateComponent', () => {
  let component: MissionDateComponent;
  let fixture: ComponentFixture<MissionDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
