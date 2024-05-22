import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'devlinks-fe-mentor',
        appId: '1:445522180211:web:84726f8f5c73c45b349206',
        storageBucket: 'devlinks-fe-mentor.appspot.com',
        apiKey: 'AIzaSyDsDDBicoGG9VHorOcg5P6OgmftndmtcdU',
        authDomain: 'devlinks-fe-mentor.firebaseapp.com',
        messagingSenderId: '445522180211',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
