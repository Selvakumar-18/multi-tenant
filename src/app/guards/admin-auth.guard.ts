import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  canActivate(): boolean | UrlTree {
    const sessionData = localStorage.getItem('session');
    const currentTenant = localStorage.getItem('currentTenant');
    const user = sessionData ? JSON.parse(sessionData) : null;

    if (user && user.role === 'admin' && user.tenant === currentTenant) {
      return true;
    }

    this.snackBar.open('You do not have permission to access this page.', 'Close', {
      duration: 3000,
      panelClass: 'snack-error'
    });

    return this.router.parseUrl(user ? '/dashboard' : '/login');
  }
}
