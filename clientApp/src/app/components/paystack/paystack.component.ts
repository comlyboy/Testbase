import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaystackOptions } from 'angular4-paystack';

@Component({
  selector: 'app-paystack',
  templateUrl: './paystack.component.html',
  styleUrls: ['./paystack.component.scss']
})
export class PaystackComponent implements OnInit {
  @Input() amount = 0;
  @Input() email = '';

  @Output() PaymentSuccess = new EventEmitter();

  reference = '';

  options: PaystackOptions = {
    amount: this.amount,
    email: this.email,
    ref: this.reference
  }


  constructor() { }


  paymentInit() {
    console.log('Payment initialized');
  }


  paymentDone(ref: any) {
    // this.title = 'Payment successfull';
    // console.log(this.title, ref);
  }


  paymentCancel() {
    console.log('payment failed');
  }

  ngOnInit() {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    console.log(this.reference)
  }

}
