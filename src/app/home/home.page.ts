import { Component } from '@angular/core';
import { SessionService } from '../session/session.service';

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
  constructor(
    private session: SessionService
  ) { }
  Alert() {
    this.session.showAlert("Hello");
  }
  Confirm() {
    this.session.showConfirm("Hello").then(rs => {
      if (rs == true) {
        alert("OK")
      } else {
        alert("NO")
      }
    });
  }
  Toast() {
    this.session.showToast("Hello", 5000);
  }
  Get() {
    this.session.getStorage("data1").then(rs => {
      this.session.showAlert(rs);
    });
  }
  Set() {
    this.session.setStorage("data1", "Hello").then(rs => {
      this.session.showAlert(rs);
    });
  }
  Remove() {
    this.session.removeStorage("data1").then(rs => {
      this.session.showAlert(rs);
    });
  }
  GoToPage2() {
    this.session.linkTo("page2");
  }
  GoToProfile() {
    this.session.linkTo("profile");
  }
  GoToPayment() {
    this.session.linkTo("payment");
  }
}
