import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { NgxSpinnerModule } from 'ngx-spinner';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideAngularSvgIcon(),
    importProvidersFrom(NgxSpinnerModule.forRoot(), LayoutModule),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'devlinks-fe-mentor',
        appId: '1:445522180211:web:84726f8f5c73c45b349206',
        storageBucket: 'devlinks-fe-mentor.appspot.com',
        apiKey: 'AIzaSyDsDDBicoGG9VHorOcg5P6OgmftndmtcdU',
        authDomain: 'devlinks-fe-mentor.firebaseapp.com',
        messagingSenderId: '445522180211',
      }),
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
