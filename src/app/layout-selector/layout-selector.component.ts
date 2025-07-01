import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-selector',
  templateUrl: './layout-selector.component.html',
  styleUrls: ['./layout-selector.component.css']
})
export class LayoutSelectorComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    const session = JSON.parse(localStorage.getItem('session') || '{}');

    if (session.layout === 'side') {
      this.router.navigate(['/side/dashboard']);
    } else if (session.layout === 'top') {
      this.router.navigate(['/top/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
