import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.page.html',
  styleUrls: ['./payment-detail.page.scss'],
})
export class PaymentDetailPage implements OnInit {
  payment: any = {};
  constructor(
    private route: ActivatedRoute,
    private session: SessionService
  ) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.payment = JSON.parse(params.payment);
    });
  }
}
