import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../../../core/service/user.service';
import { Component } from '@angular/core';
import { IUser } from 'src/app/core/interface/user';

const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'MMM DD, YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

interface IUserForm {
  name: FormControl<string>;
  username: FormControl<string>;
  email: FormControl<string>;
  dateOfBirth?: FormControl<Date | null>;
  password?: FormControl<string>;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  public hide = true;
  public userForm = new FormGroup<IUserForm>({
    name: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    username: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    email: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    dateOfBirth: new FormControl(null, { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required], nonNullable: true }),
  });

  constructor(private UserService: UserService) {}

  onSubmit() {
    this.createUser();
  }

  createUser() {
    const user: IUser = this.toInterface(this.userForm.value);

    this.UserService.addUser(user);
  }



  private toInterface(form: any): IUser {
    return {
      name: form.name,
      username: form.username,
      email: form.email,
      dateOfBirth: form.dateOfBirth,
      password: form.password
    }
  }
}
