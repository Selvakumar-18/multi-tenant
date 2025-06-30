import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  getUser: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.getUser = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.getUser)
    document.documentElement.style.setProperty('--primary-color', this.getUser.theme.primary);
    document.documentElement.style.setProperty('--secondary-color', this.getUser.theme.secondary);

  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
