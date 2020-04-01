import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventEmitterService } from 'src/services/event-emitter.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-modal-dialog',
  templateUrl: './form-modal-dialog.component.html',
  styleUrls: ['./form-modal-dialog.component.css']
})
export class FormModalDialogComponent implements OnInit {

  form: FormGroup;
  option: number;
  options: any[] = [
    {value: '3', viewValue: 'Três'},
    {value: '5', viewValue: 'Cinco'},
    {value: '7', viewValue: 'Sete'}
  ];

  constructor(
    public dialogRef: MatDialogRef<FormModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      option: new FormControl([''], Validators.required)
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
