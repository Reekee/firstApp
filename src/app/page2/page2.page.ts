import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(
    private session: SessionService
  ) { }

  ngOnInit() {
  }
  TestCallApi() {
    this.session.ajax("http://localhost/firstAppApi/get-data.php", {
      name: "Jorn"
    }, true).then((rs: any) => {
      alert(rs.data);
      alert(rs.num);
    });
  }
}
