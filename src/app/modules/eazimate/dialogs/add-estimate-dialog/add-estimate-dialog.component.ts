import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-add-estimate-dialog',
  templateUrl: './add-estimate-dialog.component.html',
  styleUrls: ['./add-estimate-dialog.component.scss']
})
export class AddEstimateDialogComponent implements OnInit {
  title = 'New Estimate';
  @ViewChild('stepper') stepper?: MatStepper;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    description: ['']
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialogRef<AddEstimateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit(): void {
  }

  saveEstimate() {
    let param = {
        name: this.firstFormGroup.value.firstCtrl,
        id: 0,
        desc: this.firstFormGroup.value.description,
        type: this.secondFormGroup.value.secondCtrl
      }
      this.dialog.close(param)
  }
}
