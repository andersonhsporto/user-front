import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/core/interface/user';
import { IUserForm } from 'src/app/core/interface/user-form';
import Swal from 'sweetalert2';
import { UserService } from './../../../../core/service/user.service';

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

  constructor(private userService: UserService) {}

  onSubmit() {
    this.validateAllFormFields(this.userForm);
    if (!this.userForm.valid) {
      Swal.fire({
        title: 'Erro ao cadastrar o Usuário',
        text: 'Preencha todos os campo do formulário para proseguir!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });

      return;
    }
    this.createUser();
  }

  createUser() {
    const user: IUser = this.toInterface(this.userForm.value);

    this.userService.addUser(user).subscribe({
      next: (r) => {
        console.log(r);
        this.alertSuccess();
      },
      error: (e) => {
        if (e.status === 0) {
          this.connectionError();
          return;
        }
        this.alertError(e);
      },
    });
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  private alertSuccess(): void {
    Swal.fire({
      title: 'Usuário cadastrado com sucesso',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }

  private alertError(errorMessage: string): void {
    Swal.fire({
      title: 'Erro ao cadastrar o Usuário',
      text: errorMessage,
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }

  private toInterface(form: any): IUser {
    return {
      name: form.name,
      username: form.username,
      email: form.email,
      dateOfBirth: form.dateOfBirth,
      password: form.password,
    };
  }

  private connectionError(): void {
    Swal.fire({
      title: 'Erro de conexão',
      text: 'Erro ao conectar com o servidor',
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }
}
