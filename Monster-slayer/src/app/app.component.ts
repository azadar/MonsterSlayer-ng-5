import { Component } from '@angular/core';
import { Turns } from './turns.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerHealth: Number = 100;
  monsterHealth: Number = 100;
  gameIsRunning: Boolean = false;
  turns: Turns[];

  startGame() {
    this.gameIsRunning = true;
    this.monsterHealth = 0;
    this.playerHealth = 0;
    this.turns = [];
  }
}
