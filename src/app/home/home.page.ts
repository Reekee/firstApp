import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num1 = 15;
  num2 = 20;
  num = this.num1 + this.num2;
  data1 = "Hello";
  data2 = "World";
  data = this.data1 + " " + this.data2;
  arr = ["aaa", "bbbb", "cccc", "ddd", "eee"];
  constructor() { }

}
