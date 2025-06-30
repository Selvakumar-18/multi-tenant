import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  canActivate(): boolean | UrlTree {
    const userData = localStorage.getItem('user');
    const user = userData ? JSON.parse(userData) : null;

    if (user && user.role === 'admin') {
      return true;
    }

    this.snackBar.open('You do not have permission to access this page.', 'Close', {
      duration: 3000,
      panelClass: 'snack-error'
    });

    return this.router.parseUrl(user ? '/dashboard' : '/login');
  }
}
