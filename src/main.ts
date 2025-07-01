import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const hostname = window.location.hostname;
let tenant = 'tenant1';
console.log(hostname)

if (hostname.includes('tenant2')) {
  tenant = 'tenant2';
}

localStorage.setItem('currentTenant', tenant);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
