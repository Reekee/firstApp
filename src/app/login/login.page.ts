import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private session: SessionService
  ) { }

  ngOnInit() {
  }
  login() {
    this.session.setStorage("login", true);
    this.session.linkTo("home");
  }
}
