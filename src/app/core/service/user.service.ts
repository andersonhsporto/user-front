import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  api: string = environment.api;

  constructor(private http: HttpClient) {}

  public addUser(body: IUser) {
    return this.http.post<IUser>(this.api + 'users', body);
  }
}
