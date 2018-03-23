import { Component } from '@angular/core';
import { Turns } from './turns.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  playerHealth = 100;
  monsterHealth = 100;
  gameIsRunning = false;
  turns: Turns[] = [];

  startGame() {
    this.gameIsRunning = true;
    this.monsterHealth = 100;
    this.playerHealth = 100;
    this.turns = [];
  }

  attack() {
    var damage = this.calculateDamage(3, 10);
    this.monsterHealth -= damage;
    this.turns.push(new Turns(
      true,
      'Player hits Monster for ' + damage
    ));

    if (this.checkWin()) {
      return;
    }
    this.monsterAttacks();
  }

  calculateDamage(min, max) {
    return Math.max(Math.floor(Math.random() * max) + 1, min);
  }

  checkWin() {
    if (this.monsterHealth <= 0) {
      if (confirm('You won! New Game?')) {
        this.startGame();
      } else {
        this.startGame();
        this.gameIsRunning = false;
      }
      this.turns = [];
      return true;
    } else if (this.playerHealth <= 0) {
      if (confirm('You lost! New Game?')) {
        this.startGame();
      } else {
        this.startGame();
        this.gameIsRunning = false;
      }
      this.turns = [];
      return true;
    }
    return false;
  }

  specialAttack() {
    var damage = this.calculateDamage(10, 20);
    this.monsterHealth -= damage;
    this.turns.push(new Turns(
      true,
      'Player hits Monster for ' + damage,
    ));
    if (this.checkWin()) {
      return;
    }
    this.monsterAttacks();

  }
  heal() {
    if (this.playerHealth <= 90) {
      this.playerHealth += 10;
    } else {
      this.playerHealth = 100;
    }
  }

  monsterAttacks() {
    var damage = this.calculateDamage(5, 12);
    this.playerHealth -= damage;
    this.checkWin();
    this.turns.push(new Turns(
      false,
      'Monster hits Player for ' + damage,
    ));
  }

  giveUp() {
    this.gameIsRunning = false;
    this.turns = [];
  }
}
