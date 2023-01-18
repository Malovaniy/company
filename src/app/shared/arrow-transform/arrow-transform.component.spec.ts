import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowTransformComponent } from './arrow-transform.component';

describe('ArrowTransformComponent', () => {
  let component: ArrowTransformComponent;
  let fixture: ComponentFixture<ArrowTransformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowTransformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowTransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
