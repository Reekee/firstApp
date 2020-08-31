import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  payments = [];
  constructor(
    private session: SessionService
  ) { }
  ngOnInit() {
    this.LoadPayment();
  }
  LoadPayment() {
    this.session.ajax(this.session.api + "get-payment.php", {
      user_id: this.session.user.user_id
    }, true).then((rs: any) => {
      this.payments = rs.data;
    }).catch(err => {
      alert("ติดต่อ API ไม่ได้");
    });
  }
  GoToPaymentDetail(payment) {
    this.session.linkToParam("payment-detail", {
      payment: JSON.stringify(payment)
    });
  }
}
