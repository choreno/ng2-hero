import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { HeroService } from './hero/services/hero.service';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({

  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    HeroDetailComponent,
    DashboardComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([

      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch : 'full' //?? what is this ??
      },
      {
        path: 'heroes',
        component: HeroComponent
      },
      {
        path:'dashboard',
        component: DashboardComponent
      }

    ])
  ],

  providers: [HeroService],

  bootstrap: [AppComponent]

})

export class AppModule { }
