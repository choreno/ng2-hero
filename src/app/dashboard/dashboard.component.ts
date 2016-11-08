import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero/services/hero.service';

@Component({

  //moduleId: module.id,  //?? set the module-relative loading of the templateUrl ??
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {


  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(x => this.heroes = x.slice(1, 5));
  }










}
