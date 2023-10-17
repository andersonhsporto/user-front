import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  api: string = environment.api;

  constructor(private http: HttpClient) {}

  public addUser(body: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.api + 'users', body);
  }
}
