import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  getUser: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getUser = JSON.parse(localStorage.getItem('session') || '{}');
    console.log(this.getUser);

    const theme = this.getUser.theme || {
      primary: '#1976d2',
      secondary: '#9c27b0'
    };

    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
  }


  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('session'); 
    this.router.navigate(['/login']);
  }

}
