import { Injectable, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:3000/user';
  private isAuthenticated = false;
  users: User[] = [];

  ngOnInit(): void {

  }

  postUser(user: Omit<User, 'id'>) {
    return this.http.post<User>(this.userUrl, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<User[]>(`${this.userUrl}?email=${email}&password=${password}`).pipe(
      tap(users => {
        if (users && users.length > 0) {
          this.isAuthenticated = true;
        };
      }),
      catchError(error => {
        console.error('Erro ao realizar login:', error);
        return of(null); // Esse of aqui, ele cria um Observable para retornar um null em vez de retornar um null diretamente, para seguir o fluxo normal do código
      })
    );
  };

}
