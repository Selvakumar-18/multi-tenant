import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-selector',
  templateUrl: './layout-selector.component.html',
  styleUrls: ['./layout-selector.component.css']
})
export class LayoutSelectorComponent {
 constructor(private router: Router) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.layout === 'side') {
      this.router.navigate(['/side/dashboard']);
    } else if (user.layout === 'top') {
      this.router.navigate(['/top/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
