import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  file: any
  start: any
  constructor(public navCtrl: NavController) {
    this.file = 1;
  }

  frame() {
    if (this.file >= 18) {
      clearInterval(this.start)
      this.file = 1;
    } else {
      this.file++
    }
  }

  test() {
    console.log('test')
  }

  animate() {
    if (this.file > 1) {
      this.file = 7;
      clearInterval(this.start)
    }
    this.start = setInterval(()=>{
      this.frame();
    }, 24)
  }
}
