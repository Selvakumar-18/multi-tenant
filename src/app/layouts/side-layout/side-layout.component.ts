import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-side-layout',
  templateUrl: './side-layout.component.html',
  styleUrls: ['./side-layout.component.css']
})
export class SideLayoutComponent {
  getUser: any;

  constructor(private router: Router, private dialog: MatDialog) { }
  ngOnInit() {
    this.getUser = JSON.parse(localStorage.getItem('user') || '{}');
    document.documentElement.style.setProperty('--primary-color', this.getUser.theme.primary);
    document.documentElement.style.setProperty('--secondary-color', this.getUser.theme.secondary);

  }

  logout() {
    localStorage.removeItem('user');
     this.router.navigate(['/login']);
  }
}
