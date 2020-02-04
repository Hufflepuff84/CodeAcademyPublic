import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'D9Auth';
  heroes: any[] = [];

  constructor(
    private authService: AuthService,
    private heroService: HeroService) {}

  async ngOnInit() {
    this.heroes = await this.heroService.getHeroes();
  }
  async authenticate() {
    this.authService.login();
  }

  async addHero(event: any) {
    const value = event.target.value;

    await this.heroService.addHero(value);

    this.heroes = await this.heroService.getHeroes();
  }
}
