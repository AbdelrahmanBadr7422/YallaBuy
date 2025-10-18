import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class User {
  authUrl = `${environment.apiBaseUrl}/auth/login`;
}
