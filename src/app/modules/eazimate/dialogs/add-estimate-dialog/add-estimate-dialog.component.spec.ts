import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstimateDialogComponent } from './add-estimate-dialog.component';

describe('AddEstimateDialogComponent', () => {
  let component: AddEstimateDialogComponent;
  let fixture: ComponentFixture<AddEstimateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEstimateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEstimateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
