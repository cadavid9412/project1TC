import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
//import { LexicographicanalyzerComponent } from './components/lexicographicAnalyzer/lexicographicanalyzer.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'documentation', component: DocumentationComponent },
    //{ path: 'lexicographicanalyzer', component: LexicographicanalyzerComponent  },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
