import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ErrorHandler } from './error-handler';
import { Login } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  private errorHandler = inject(ErrorHandler);
  authUrl = `${environment.apiBaseUrl}/auth/login`;
  login(login: Login): Observable<string> {
    return this.http
      .post<string>(this.authUrl, login)
      .pipe(catchError(this.errorHandler.handleError));
  }
}
