import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { SideLayoutComponent } from './layouts/side-layout/side-layout.component';
import { TopLayoutComponent } from './layouts/top-layout/top-layout.component';
import { LayoutSelectorComponent } from './layout-selector/layout-selector.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'layout', component: LayoutSelectorComponent },

  {
    path: 'side',
    component: SideLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'admin', component: AdminComponent ,canActivate: [AdminAuthGuard]},
    ]
  },
  {
    path: 'top',
    component: TopLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'admin', component: AdminComponent ,canActivate: [AdminAuthGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
