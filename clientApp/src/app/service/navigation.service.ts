import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  urlListener = new Subject<string>();

  constructor(
    private router: Router
  ) { }


  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToOnBoarding() {
    this.router.navigate(['/on-boarding']);
  }



  goToHome() {
    this.router.navigate(['/home']);
  }

  goToMenu() {
    this.router.navigate(['/menu']);
  }



  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToManagerDashboard() {
    this.router.navigate(['/engineer-manager/dashboard']);
  }

  goToCustomerCareDashboard() {
    this.router.navigate(['/customer-care/dashboard']);
  }

  goToRole() {
    this.router.navigate(['/roles']);
  }



  goToReport() {
    this.router.navigate(['/report']);
  }




  goToUserProfile() {
    this.router.navigate(['/account-settings']);
  }



  goToNewServiceRecordsPage() {
    this.router.navigate(['/customer-care/service-records/new']);
  }

  goToServiceRecordsPage() {
    this.router.navigate(['/customer-care/service-records']);
  }

  goToServiceRecordDetailPage(recordId: string) {
    this.router.navigate(['/customer-care/service-records/details', recordId]);
  }

  goToServiceRecordEditPage(recordId: string) {
    this.router.navigate(['/customer-care/service-records/edit', recordId]);
  }



  goToRepairCustomersPage() {
    this.router.navigate(['/engineering/customers']);
  }

  goToNewRepairCustomerPage() {
    this.router.navigate(['/engineering/customers/new']);
  }

  goToEditRepairCustomerPage(customerId: string) {
    this.router.navigate(['/engineering/customers/edit', customerId]);
  }

  goToRepairCustomerDetails(customerId: string) {
    this.router.navigate(['/engineering/customers/details', customerId]);
  }



  goToRepairRecordsPaage() {
    this.router.navigate(['/engineering/repair-records']);
  }

  goToNewRepairRecordPage() {
    this.router.navigate(['/engineering/repair-records/new']);
  }

  goToEditRepairRecordPage(recordId: string) {
    this.router.navigate(['/engineering/repair-records/edit', recordId]);
  }

  goToRepairRecordDetailsPage(recordId: string) {
    this.router.navigate(['/engineering/repair-records/details', recordId]);
  }





  goToEngineerDetailsPage(engineerId: string) {
    this.router.navigate(['/engineering/engineers/details', engineerId]);
  }

  goToEngineerTransactions(engineerId: string) {
    this.router.navigate(['/engineering/engineers/details', engineerId, 'transactions']);
  }

  goToEngineerCustomers(engineerId: string) {
    this.router.navigate(['/engineering/engineers/details', engineerId, 'customers']);
  }




  toggleSidenavSubject(url: string) {
    this.urlListener.next(url);
  }


}
