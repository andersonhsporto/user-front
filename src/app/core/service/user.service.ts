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

  public addUser(obj: IUser) {
    return this.httpClient.post<IUser>(this.api + 'users', obj);
  }

  public getAllUsers() {
    return this.httpClient.get<IUser[]>(this.api + 'users');
  }

  public deleteById(id: number) {
    return this.httpClient.delete(this.api + 'users/' + id);
  }

  public updateUser(obj: IUser, id: number) {
    return this.httpClient.put<IUser[]>(this.api + 'users/' + id, obj);
  }
}
