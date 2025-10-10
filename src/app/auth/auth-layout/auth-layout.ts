import { Component } from '@angular/core';
import { AuthNav } from "../auth-nav/auth-nav";
import { AuthFooter } from "../auth-footer/auth-footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [AuthNav, AuthFooter, RouterOutlet],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css'
})
export class AuthLayout {

}
