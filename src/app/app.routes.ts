import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AngebotSinglePage } from './components/angebot-single-page/angebot-single-page';
import { Angebote } from './components/angebote/angebote';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home},
    { path: 'prognostik/:slug/:id', component: AngebotSinglePage },
    { path: 'angebote', component: Angebote }
];
