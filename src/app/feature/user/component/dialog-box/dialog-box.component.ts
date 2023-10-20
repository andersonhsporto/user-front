import { UserService } from './../../../../core/service/user.service';
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from 'src/app/core/interface/user';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
})
export class DialogBoxComponent {
  local_dat: any;
  hide: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IUser,
  ) {
    console.log(data);
    this.local_dat = { ...data };
  }

  doAction() {
    this.dialogRef.close({
      event: "Update",
      data: this.local_dat,
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
