import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';

import { HeroComponent } from '../hero/hero.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
     {
        path: '',
        redirectTo: '/dashboard',
        pathMatch : 'full' //?? what is this ?? Options: 'full' or 'prefix'
      },
      {
        path: 'heroes',
        component: HeroComponent
      },
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent

      }
]; 


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
