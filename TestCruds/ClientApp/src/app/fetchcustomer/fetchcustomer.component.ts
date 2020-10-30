import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customerservice';
import * as XLSX from 'xlsx';  
import { MessageService } from 'primeng/api';


@Component({
  selector: 'fetchcustomer',
  templateUrl: './fetchcustomer.component.html'
})

export class FetchCustomerComponent {
  @ViewChild('TABLE') TABLE: ElementRef;  

  title = 'Excel';
  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Customers');  
    XLSX.writeFile(wb, 'CustomersInvoicesPayment.xlsx');  
  }  

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }


  //showError() {
  //  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  //}


  showBottomCenter() {
    this.messageService.add({ key: 'bc', severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }


  onReject() {
    this.messageService.clear('c');

  }

  clear() {
    this.messageService.clear();
  }

  public custList: CustomerData[];
  customerId: number;
  customerNo: string;
  customerName: string;

  constructor(public http: Http, private _router: Router, private customerservice: CustomerService, private messageService: MessageService) {
    this.getCustomer();

  }

  getCustomer() {
    this.customerservice.getCustomerList().subscribe(
      (data: CustomerData[]) => {
        var res = data;
        this.custList = data;
      }
    );
  }

  onConfirm(customerId) {

    debugger;
    this.delete(this.customerId)
    this.messageService.clear();
    this.messageService.add((this.customerId, { key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' }));

  }

  showError() {
    this.messageService.add({ severity: 'error', detail: 'Deleted Successfully' });
  }

  delete(customerId) {
    var ans = confirm("Do you want to delete customer with customerId: " + customerId);
    if (ans) {
      this.customerservice.deleteCustomer(customerId).subscribe(() => {
        this.getCustomer();
      }, error => console.error(error))
    }
  }

}


interface CustomerData {
  customerId: number;
  customerNo: string;
  customerName: string;
}
