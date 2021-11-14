import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Angular4PaystackModule } from 'angular4-paystack';

import { PaystackComponent } from './paystack.component';


@NgModule({
  declarations: [PaystackComponent],
  imports: [
    CommonModule,
    Angular4PaystackModule.forRoot('pk_test_xxxxxxxxxxxxxxxxxxxxxxxx'),
  ],
  exports: [PaystackComponent],
})
export class PaystackModule { }
