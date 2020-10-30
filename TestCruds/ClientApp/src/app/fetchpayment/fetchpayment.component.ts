import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customerservice';
import { InvoiceService } from '../services/invoiceservice';
import * as XLSX from 'xlsx';
import { PaymentService } from '../services/paymentservice';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'fetchpayment',
  templateUrl: './fetchpayment.component.html'
})

export class FetchPaymentComponent {
   

  @ViewChild('TABLE') TABLE: ElementRef;

  title = 'Excel';
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Payment');
    XLSX.writeFile(wb, 'CustomersInvoicesPayment.xlsx');
  }

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

  public payList: PaymentData[];

  paymentId: number;
  paymentNo: string;
  invoiceId: number;
  paymentDate: string;
  paymentAmount: string;

  constructor(public http: Http, private _router: Router, private paymentservice: PaymentService, private messageService: MessageService) {
    this.getPaymet();

  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
  
  getPaymet() {
    this.paymentservice.getPaymentList().subscribe(
      (data: PaymentData[]) => {
        var res = data;
        this.payList = data;
      }
    );
  }
  onConfirm(invoiceId) {

    debugger;
    this.delete(this.invoiceId)
    this.messageService.clear();
    this.messageService.add((this.invoiceId, { key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' }));

  }
  showError() {
    this.messageService.add({ severity: 'error', detail: 'Deleted Successfully' });
  }
  delete(paymentId) {
    var ans = confirm("Do you want to delete customer with   paymentId: " + paymentId);
    if (ans) {
      this.paymentservice.deletePayment(paymentId).subscribe(() => {
        this.getPaymet();
      }, error => console.error(error))
    }
  }

}

interface PaymentData {
  paymentId: number;
  paymentNo: string;
  invoiceId: number;
  paymentDate: Date;
  paymentAmount: string;
}
