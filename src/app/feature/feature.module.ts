import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/component/login/login.component';
import { AddUserComponent } from './user/component/add-user/add-user.component';
import { DialogBoxComponent } from './user/component/dialog-box/dialog-box.component';
import { ListUserComponent } from './user/component/list-user/list-user.component';
import { FormsModule } from '@angular/forms';

const materialModules = [
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatIconModule,
  MatRadioModule,
  MatGridListModule,
  MatSelectModule,
  MatDatepickerModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
];

@NgModule({
  declarations: [LoginComponent, AddUserComponent, ListUserComponent, DialogBoxComponent],
  imports: [CommonModule, materialModules, ReactiveFormsModule, FormsModule],
  exports: [AddUserComponent],
})
export class FeatureModule {}
