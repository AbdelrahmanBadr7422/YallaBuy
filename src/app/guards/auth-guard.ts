import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const _isLogged = localStorage.getItem('auth');

  if (_isLogged) {
    return true;
  }

  router.navigate(['/auth/login']);
  return false;
};
