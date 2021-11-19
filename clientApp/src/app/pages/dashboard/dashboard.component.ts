import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalBillings = 0;
  walletBalance = 0;
  wallets: any[] = [];
  wallet: any;

  bilingPerPage = 8;
  currentPage = 1;

  constructor(
    private utilityService: UtilityService
  ) { }


  onInputPrice(event: Event) {
    const value = (event.target as HTMLInputElement).value as unknown as number;
    if (value <= 0) {
      return;
    }
  }


  onViewBilling(billingId: string) {
    // this.billing = this.billings.find((item) => item._id === billingId);

  }

  initContents() {
    this.utilityService.setPageTitle('Dashboard');
  }

  ngOnInit() {
    this.initContents();
  }

}
