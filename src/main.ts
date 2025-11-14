import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { register as registerSwiperElements } from 'swiper/element-bundle';


//swiper init
registerSwiperElements();

//usual angular
bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient() // <-- neue, saubere Variante
  ]
}).catch(err => console.error(err));
