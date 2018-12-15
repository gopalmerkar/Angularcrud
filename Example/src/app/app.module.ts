import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule ,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list/hero-list.component';
import { CrisisListComponent } from './crisis-list/crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';


// const appRoutes: Routes = [
//              { path:'crisis-center', component:CrisisListComponent },
//              { path:'heroes', component:HeroListComponent },
//              { path:'**',component:PageNotFoundComponent }
// ];
@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeroesModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
