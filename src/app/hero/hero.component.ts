import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './services/hero.service';



@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  // providers: [HeroService],
})
export class HeroComponent implements OnInit {

  //title = 'Tour of Heros';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Superman'
  // };

  // heroes = HEROES;

  heroes: Hero[];
  selectedHero: Hero;

  
  constructor(private heroService: HeroService) { //DI
    //this.heroes = this.heroService.getHeroes();  //do not call db from the constructor, make do ngInit()
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(x=>this.heroes = x);
    // /this.heroService.getHeroSlowly().then(x=>this.heroes = x);   //slow service example
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;

  }


}
