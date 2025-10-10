import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userLoggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const _isLogged = localStorage.getItem('auth');
  if (_isLogged) {
    router.navigate(['home']);
    return false;
  }
  return true;
};
