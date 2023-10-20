import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interface/user';
import { UserService } from './../../../../core/service/user.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
// name: string;
// username: string;
// email: string;
// dateOfBirth?: Date | null;
// password?: string;
const ELEMENT_DATA: IUser[] = [
  { name: 'Hydrogen', username: 'Hydrogen', email: 'email', dateOfBirth: null },
  { name: 'Helium', username: 'Helium', email: 'email', dateOfBirth: null },
  { name: 'Lithium', username: 'Lithium', email: 'email', dateOfBirth: null },
  { name: 'Beryllium', username: 'Beryllium', email: 'email', dateOfBirth: null },
  { name: 'Boron', username: 'Boron', email: 'email', dateOfBirth: null },
  { name: 'Carbon', username: 'Carbon', email: 'email', dateOfBirth: null },
  { name: 'Nitrogen', username: 'Nitrogen', email: 'email', dateOfBirth: null },
  { name: 'Oxygen', username: 'Oxygen', email: 'email', dateOfBirth: null },
  { name: 'Fluorine', username: 'Fluorine', email: 'email', dateOfBirth: null },
];

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'username', 'email', 'dateOfBirth', 'actions'];
  dataSource = ELEMENT_DATA;
  users: IUser[] = [];

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (r) => {
        this.users = r;
      },
    });
  }

  openDialog(obj: any) {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Update') {
        console.log('Teste');
      } else if (result.event == 'Delete') {
        console.log('Teste');
      }
    });
  }

  update(obj: IUser): void {
    
  }

  delete(id: number): void {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteById(id).subscribe(() => {
          Swal.fire('Deletado!', 'Usuário foi deletado com sucesso!.', 'success');
          this.ngOnInit();
        });
      }
    });
  }
}
