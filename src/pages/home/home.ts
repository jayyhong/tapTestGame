import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  file: any
  start: any
  damage: any;
  baseDamage: any;
  enemyHealth: any;
  enemies: any;
  enemyDatabase: any;
  constructor(public navCtrl: NavController) {
    this.file = 1;
    this.baseDamage = 50;
    this.damage = 0;
    this.enemyHealth = 0;
    this.enemies = ['blob','blob2','blob3']
    this.enemyDatabase = {
      'blob': 1000,
      'blob2': 2000,
      'blob3': 3000
    }
  }

  ngOnInit() {
    this.spawnEnemy();
  }

  frame() {
    if (this.file >= 17) {
      clearInterval(this.start)
      this.file = 1;
    } else {
      this.file++
    }
  }

  spawnEnemy() {
    let random = Math.floor(Math.random() * this.enemies.length)
    console.log('Enemy: ', this.enemies[random])
    this.enemyHealth = this.enemyDatabase[this.enemies[random]]
    console.log('Enemy Health: ', this.enemyHealth)
  }

  test() {
    console.log('test')
  }

  attack() {
    this.damage = Math.ceil(Math.random() * 10 + this.damage) + this.baseDamage
    console.log("- ", this.damage)
    this.enemyHealth = this.enemyHealth - this.damage;
    console.log('Enemy Health: ', this.enemyHealth)
    if (this.enemyHealth <= 0) {
      console.log('Enemy died')
      this.spawnEnemy();
    }
  }

  animate() {
    if (this.file > 1) {
      this.file = 7;
      clearInterval(this.start)
    }
    this.start = setInterval(() => {
      this.frame();
    }, 24)
  }
}
