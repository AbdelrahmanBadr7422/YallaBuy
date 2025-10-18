import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Cart {
authUrl = `${environment.apiBaseUrl}/auth/login`;
}
