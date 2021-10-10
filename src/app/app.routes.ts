import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { GramaticasComponent } from './components/gramatica/gramatica.component';



export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'documentation', component: DocumentationComponent },
    { path: 'gramatica', component: GramaticasComponent  },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
