import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user = {};
  constructor(
    private session: SessionService
  ) { }
  ngOnInit() {
    this.LoadProfile();
  }
  LoadProfile() {
    this.session.ajax(this.session.api + "get-profile.php", {
      user_id: '2'
    }, true).then((rs: any) => {
      this.user = rs.data;
    }).catch(err => {
      alert("ติดต่อ API ไม่ได้");
    });
  }
  logout() {
    this.session.removeStorage("login");
    this.session.linkTo("login");
  }
}
