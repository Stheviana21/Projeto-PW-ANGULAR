import { HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/components/login/login.component';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes)
  ]
});
