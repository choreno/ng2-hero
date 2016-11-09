import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../services/hero.service';
import {Router} from '@angular/router'; 


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

  
  constructor(private router: Router, private heroService: HeroService) { //DI
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

  gotoDetail():void{

    this.router.navigate(['/detail', this.selectedHero.id]) ;

  }
  add(name:string):void{
    name = name.trim(); 
    if(!name) {return; }
    this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero); 
      this.selectedHero = null ; 
    })
  }

delete(hero:Hero):void{
  this.heroService.delete(hero.id)
  .then(()=>{
    this.heroes = this.heroes.filter(h=>h != hero); 
    if(this.selectedHero === hero){
      this.selectedHero = null;
    }
  })
}


}
