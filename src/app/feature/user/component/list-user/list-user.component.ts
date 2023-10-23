import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUser } from 'src/app/core/interface/user';
import Swal from 'sweetalert2';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { UserService } from './../../../../core/service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'username', 'email', 'dateOfBirth', 'actions'];
  users: IUser[] = [];

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  openDialog(obj: any) {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Update') {
        this.update(result.data, obj.id);
      }
      this.getAllUsers();
    });
  }

  update(obj: IUser, id: number): void {
    this.userService.updateUser(obj, id).subscribe({
      next: (r) => {
        Swal.fire({
          title: 'Usuário atualizado com sucesso',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      },
      error: (e) => {
        if (e.status === 0) {
          this.connectionError();
          return;
        }

        Swal.fire({
          title: 'Erro ao atualizar cliente',
          text: e,
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      },
    });
  }

  delete(id: number): void {
    Swal.fire({
      title: 'Deseja Excluir Este Usuário ?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteById(id).subscribe({
          next: () => {
            Swal.fire('Deletado!', 'Usuário foi deletado com sucesso!.', 'success');
            this.ngOnInit();
          },
          error: (e) => {
            if (e.status === 0) {
              this.connectionError();
              return;
            }
          },
        });
      }
    });
  }

  private connectionError(): void {
    Swal.fire({
      title: 'Erro de conexão',
      text: 'Erro ao conectar com o servidor',
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }

  private getAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (r) => {
        this.users = r;
      },
    });
  }
}
