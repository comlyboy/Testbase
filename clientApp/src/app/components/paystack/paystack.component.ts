import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaystackOptions } from 'angular4-paystack';
import { NotificationService } from '../notification/notification.service';

@Component({
  selector: 'app-paystack',
  templateUrl: './paystack.component.html',
  styleUrls: ['./paystack.component.scss']
})
export class PaystackComponent implements OnInit {
  @Input() amount = 23420;
  @Input() email = 'okekecornelius@gmail.com';

  @Output() PaymentSuccess = new EventEmitter();

  reference = '';

  options!: PaystackOptions;

  constructor(
    private notificationService: NotificationService
  ) { }


  paymentInit() {
    console.log('Payment initialized');
  }


  paymentDone(response: any) {
    this.notificationService.notify(response.message)
  }


  paymentCancel() {
    console.log('payment failed');
  }

  ngOnInit() {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;

    this.options = {
      amount: this.amount,
      email: this.email,
      ref: this.reference
    }

  }

}
