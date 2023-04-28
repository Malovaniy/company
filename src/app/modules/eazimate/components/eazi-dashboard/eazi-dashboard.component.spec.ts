import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaziDashboardComponent } from './eazi-dashboard.component';

describe('EaziDashboardComponent', () => {
  let component: EaziDashboardComponent;
  let fixture: ComponentFixture<EaziDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaziDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EaziDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
