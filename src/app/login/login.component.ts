import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TENANT_SETTINGS } from '../app.const';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'multi-tenant';
  loginForm !: FormGroup;
  tenantType: string = '';


  constructor(private fb: FormBuilder, private http: HttpClient,
    private router: Router, private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginData(): void {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.http.get<any[]>('assets/users.json').subscribe(users => {
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        const currentTenant = localStorage.getItem('currentTenant');
        console.log('Detected tenant from domain:', currentTenant);
        console.log('User tenant type:', user.tenantType);

        if (user.tenantType !== currentTenant) {
          this.snackBar.open('Access denied for this tenant URL!', 'X', {
            duration: 3000,
            panelClass: 'snack-error'
          });
          return;
        }

        const tenantConfig = TENANT_SETTINGS[user.tenantType];
        const session = {
          email: user.email,
          role: user.role,
          tenant: user.tenantType,
          theme: {
            primary: tenantConfig.primary,
            secondary: tenantConfig.secondary
          },
          layout: tenantConfig.layout,
          logo: tenantConfig.logo
        };

        localStorage.setItem('session', JSON.stringify(session));

        this.snackBar.open('Login Successful!', 'X', {
          duration: 3000,
          panelClass: 'snack-success'
        });

        this.router.navigate(['/layout']);

      } else {
        this.snackBar.open('Invalid credentials!', 'X', {
          duration: 3000,
          panelClass: 'snack-error'
        });
      }
    });
  }

}
