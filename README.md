# Multi-Tenant Role-Based Angular Application

A scalable Angular 16 application designed for **multi-tenant architecture** using subdomain-based deployment, custom layout and theme per tenant, and **role-based access control**. Hosted on **Firebase** with isolated configurations per tenant.

---

##  Features

- **Role-Based Access Control (RBAC)**: Admin and User roles with route protection.
-  **Subdomain-based Tenant Hosting**: Each tenant has its own Firebase Hosting site (e.g. `tenant1.web.app`, `tenant2.web.app`).
-  **Per-Tenant Customizations**:
  - Logo
  - Theme (Primary/Secondary colors)
  - Layout (Side/Top)
-  Smart Session Storage using `localStorage`
-  Guarded Admin routes (`AdminAuthGuard`)
-  Basic Unit Testing with Angular TestBed
-  Firebase Hosting via deployment targets

---

## Folder Structure

```bash
multi-tenant/
├── src/
│   ├── app/
│   │   ├── login/                # Login Component
│   │   ├── dashboard/            # Common dashboard for users
│   │   ├── admin/                # Admin-only routes
│   │   ├── guards/               # Route guards
│   │   ├── layouts/              # TopLayout and SideLayout
│   │   ├── layout-selector/      # Redirects based on layout
│   │   └── app-routing.module.ts
│   ├── assets/users.json         # Mock user data with tenant info
├── firebase.json                 # Firebase multi-site hosting config
├── .firebaserc                   # Firebase target mapping

---

**##User Data**
[
  {
    "email": "kavin@yopamil.com",
    "password": "kavin@123",
    "tenantType": "tenant1",
    "role": "admin"
  },
  {
    "email": "selvaone@yopamil.com",
    "password": "selva@123",
    "tenantType": "tenant1",
    "role": "user"
  },
  {
    "email": "virat@yopamil.com",
    "password": "virat@123",
    "tenantType": "tenant2",
    "role": "admin"
  },{
    "email": "gill@yopamil.com",
    "password": "gill@123",
    "tenantType": "tenant2",
    "role": "user"
  }
]

