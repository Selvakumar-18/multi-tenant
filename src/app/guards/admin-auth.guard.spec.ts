import { TestBed } from '@angular/core/testing';
import { AdminAuthGuard } from './admin-auth.guard';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('AdminAuthGuard', () => {
  let guard: AdminAuthGuard;
  let routerSpy: any;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['parseUrl']);

    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [
        AdminAuthGuard,
        { provide: Router, useValue: routerSpy }
      ]
    });

    guard = TestBed.inject(AdminAuthGuard);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should allow access for admin user', () => {
    localStorage.setItem('session', JSON.stringify({ role: 'admin' }));
    const result = guard.canActivate();
    expect(result).toBeTrue();
  });

  it('should redirect non-admin user to dashboard', () => {
    localStorage.setItem('session', JSON.stringify({ role: 'user' }));
    const result = guard.canActivate();
    expect(routerSpy.parseUrl).toHaveBeenCalledWith('/dashboard');
    expect(result.toString()).toBe('/dashboard');
  });

  it('should redirect unauthenticated user to login', () => {
    const result = guard.canActivate();
    expect(routerSpy.parseUrl).toHaveBeenCalledWith('/login');
    expect(result.toString()).toBe('/login');
  });
});

