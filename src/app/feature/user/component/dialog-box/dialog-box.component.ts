import { Component, Inject, Optional, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from 'src/app/core/interface/user';
import { IUserForm } from 'src/app/core/interface/user-form';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
})
export class DialogBoxComponent {
  public hide: boolean = true;

  public userForm = new FormGroup<IUserForm>({
    name: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    username: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    email: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    dateOfBirth: new FormControl(null, { validators: [Validators.required] }),
  });

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IUser,
  ) {
    this.fromInterface(data);
  }

  doAction() {
    this.dialogRef.close({
      event: 'Update',
      data: this.toInterface(this.userForm.value),
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  private toInterface(form: any): IUser {
    return {
      name: form.name,
      username: form.username,
      email: form.email,
      dateOfBirth: form.dateOfBirth,
    };
  }

  private fromInterface(user: IUser) {
    this.userForm.setValue({
      name: user.name,
      username: user.username,
      email: user.email,
      dateOfBirth: new Date(user.dateOfBirth),
    });
  }
}
