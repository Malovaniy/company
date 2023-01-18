import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCaseComponent } from './portfolio-case.component';

describe('PortfolioCaseComponent', () => {
  let component: PortfolioCaseComponent;
  let fixture: ComponentFixture<PortfolioCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
