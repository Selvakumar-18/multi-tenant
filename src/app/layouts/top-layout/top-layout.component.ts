import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-top-layout',
  templateUrl: './top-layout.component.html',
  styleUrls: ['./top-layout.component.css']
})
export class TopLayoutComponent {
  getUser: any;

  constructor(private router: Router, private dialog: MatDialog) { }
  ngOnInit() {
    this.getUser = JSON.parse(localStorage.getItem('session') || '{}');
    document.documentElement.style.setProperty('--primary-color', this.getUser.theme.primary);
    document.documentElement.style.setProperty('--secondary-color', this.getUser.theme.secondary);

  }

  logout() {
    localStorage.removeItem('session');
    this.router.navigate(['/login']);
  }
}