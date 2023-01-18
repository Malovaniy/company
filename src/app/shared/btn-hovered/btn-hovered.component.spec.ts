import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnHoveredComponent } from './btn-hovered.component';

describe('BtnHoveredComponent', () => {
  let component: BtnHoveredComponent;
  let fixture: ComponentFixture<BtnHoveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnHoveredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnHoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
