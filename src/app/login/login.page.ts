import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = "";
  password = "";
  constructor(
    private session: SessionService
  ) { }

  ngOnInit() {
  }
  login() {
    // Check ค่า username กับ password ในฐานข้อมูล
    this.session.ajax(this.session.api + "login.php", {
      username: this.username,
      password: this.password
    }, true).then((rs: any) => {
      if (rs.login == true) {
        this.session.login = true;
        this.session.user = rs.user;
        this.session.setStorage("login", true);
        this.session.setStorage("user", rs.user);
        this.session.linkTo("home");
      } else {
        this.session.showAlert("รหัสไม่ถูกนะจ่ะ");
      }
    }).catch(err => {
      alert("ติดต่อ API ไม่ได้");
    });

  }
}
