import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/interface/user';
import { UserService } from './../../../../core/service/user.service';

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

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe({
      next: (r) => {
        this.users = r;
      }
    })
  }

  delete(id: number): void {
    console.log(id);
  }
}
