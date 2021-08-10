import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// aplication components
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
//import { LexicographicanalyzerComponent } from './components/lexicographicAnalyzer/lexicographicanalyzer.component';
//import { NodeComponent } from './services/node/node.service';


// Import routes
import { ROUTES } from './app.routes';

// Angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatInputModule} from '@angular/material/input';
// import {MatListModule} from '@angular/material/list';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //LexicographicanalyzerComponent,
    NavbarComponent,
    DocumentationComponent,
    //NodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    // MatInputModule,
    // MatListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
