import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  file: any
  file_hit_1: any;
  file_hit_1_stop: any;
  enemyfile_blob_1: any;
  start: any
  damage: any;
  baseDamage: any;
  enemyHealth: any;
  enemies: any;
  enemyDatabase: any;
  constructor(public navCtrl: NavController) {
    this.file = 1;
    this.file_hit_1 = 1;
    this.enemyfile_blob_1 = 1;
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
    this.animate_blob_1();
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
    if (this.file_hit_1 > 1) {
      this.file_hit_1 = 1;
      clearInterval(this.file_hit_1_stop)
    }
    this.animate_hit1();
    this.enemyHealth = this.enemyHealth - (this.baseDamage + Math.ceil(Math.random() * 10));
    console.log('Enemy Health: ', this.enemyHealth)
    if (this.enemyHealth <= 0) {
      console.log('Enemy died')
      this.spawnEnemy();
    }
  }

  frame() {
    if (this.file >= 17) {
      clearInterval(this.start)
      this.file = 1;
    } else {
      this.file++
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

  animate_hit1() {
    this.file_hit_1_stop = setInterval(() => {
      if (this.file_hit_1 >= 5) {
        this.file_hit_1 = 1
        clearInterval(this.file_hit_1_stop)
      } else {
        this.file_hit_1 ++
      }
    }, 30)
  }

  animate_blob_1() {
    setInterval(() => {
      if (this.enemyfile_blob_1 >= 19) {
        this.enemyfile_blob_1 = 1
      } else {
        this.enemyfile_blob_1 ++
      }
    }, 50)
  }

}
