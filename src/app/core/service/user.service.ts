import { IUser } from 'src/app/core/interface/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  api: string = environment.api;

  constructor(private httpClient: HttpClient) {}

  public addUser(body: IUser) {
    return this.httpClient.post<IUser>(this.api + 'users', body);
  }

  public getAllUsers() {
    return this.httpClient.get<IUser[]>(this.api + 'users');
  }
}
