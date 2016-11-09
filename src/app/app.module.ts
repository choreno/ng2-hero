import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Module
import { AppRoutingModule } from './router/app-routing.module';
import  './rxjs/rxjs.extensions';

// Components
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { DashboardComponent } from './dashboard/dashboard.component';

//Service
import { HeroService } from './services/hero.service';


//InMemory
import {InMemoryWebApiModule} from 'angular-in-memory-web-api'; 
import {InMemoryDataService} from './services/in-memory-data-service';
import { HeroSearchComponent } from './hero-search/hero-search.component';


@NgModule({

  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],

  providers: [HeroService],

  bootstrap: [AppComponent]

})

export class AppModule { }
