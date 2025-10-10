import { Routes } from '@angular/router';
import { userLoggedGuard } from './guards/user-logged-guard';
import { PageNotFound } from './shared/page-not-found/page-not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth-layout/auth-layout').then((c) => c.AuthLayout),
    // canActivate: [userLoggedGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadComponent: () => import('./auth/login/login').then((c) => c.Login) ,title:'Login' },
      {
        path: 'register',
        loadComponent: () => import('./auth/register/register').then((c) => c.Register),title:'Register'
      },
      {
        path: 'forgetpass',
        loadComponent: () => import('./auth/forget-pass/forget-pass').then((c) => c.ForgetPass),title:'Forget Password'
      },
    ],
  },
  {
    path: '',
    loadComponent: () => import('./user/user-layout/user-layout').then((c) => c.UserLayout),
    // canActivate:[authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./shared/home/home').then((c) => c.Home),title:'Home' },
    ],

  },
  {path:'**',component:PageNotFound,title:'Not Found 404'}
];
