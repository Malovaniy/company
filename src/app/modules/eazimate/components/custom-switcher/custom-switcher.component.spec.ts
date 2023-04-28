import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSwitcherComponent } from './custom-switcher.component';

describe('CustomSwitcherComponent', () => {
  let component: CustomSwitcherComponent;
  let fixture: ComponentFixture<CustomSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
