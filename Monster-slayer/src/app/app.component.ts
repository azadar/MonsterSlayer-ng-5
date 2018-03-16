import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerHealth = 100;
  monsterHealth = 100;
  gameIsRunning = false;
  turns = [];
}
