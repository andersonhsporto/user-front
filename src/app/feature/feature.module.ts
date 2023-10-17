import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/component/login/login.component';
import { AddUserComponent } from './user/component/add-user/add-user.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

const materialModules = [
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatIconModule,
  MatRadioModule,
  MatGridListModule,
  MatSelectModule,
  MatDatepickerModule,
];

@NgModule({
  declarations: [LoginComponent, AddUserComponent],
  imports: [CommonModule, materialModules],
  exports: [AddUserComponent],
})
export class FeatureModule {}
