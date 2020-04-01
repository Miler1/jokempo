import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormModalDialogComponent } from './form-modal-dialog/form-modal-dialog.component';
import { EventEmitterService } from '../../services/event-emitter.service';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  @Output() responseDialog = new EventEmitter();
  animal: string;
  name: string;
  option: number;
  data: any;
  form: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    // this.responseDialog.emit(this.openDialog());
    this.form = this.fb.group({
      name: new FormControl([''], Validators.required),
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  openDialog(): void {
    // console.log(n);
    const dialogRef = this.dialog.open(FormModalDialogComponent, {
      width: '400px',
      height: '250px',
      data: {name: this.name, option: this.option}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      console.log('The dialog was closed');
      this.data = result;
      console.log(this.data);
      // this.responseDialog.emit(this.option);
      EventEmitterService.get('reloadData').emit(this.data);
    });
    
  }

}
