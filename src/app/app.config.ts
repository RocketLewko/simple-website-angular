import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

import localePl from '@angular/common/locales/pl';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { routes } from './app.routes';

registerLocaleData(localePl);

export const appConfig: ApplicationConfig = {
  providers: [
    // provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    { provide: LOCALE_ID, useValue: 'pl' },
  ],
};
