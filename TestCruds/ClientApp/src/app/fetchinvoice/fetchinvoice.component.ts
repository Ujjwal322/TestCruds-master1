import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customerservice';
import { InvoiceService } from '../services/invoiceservice';
import * as XLSX from 'xlsx';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'fetchinvoice',
  templateUrl: './fetchinvoice.component.html'
})

export class FetchInvoiceComponent {
  @ViewChild('TABLE') TABLE: ElementRef;

  title = 'Excel';
  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Invoice');
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



  public invList: InvoiceData[];

  invoiceId: number;
  invoiceNo: string;
  customerId: number;
  invoiceDate: Date;
  invoiceAmount: string;
  paymentDueDate: Date;

  constructor(public http: Http, private _router: Router, private invoiceservice: InvoiceService, private messageService: MessageService) {
    this.getInvoice();

  }
  
  getInvoice() {
    this.invoiceservice.getInvoiceList().subscribe(
      (data: InvoiceData[]) => {
        var res = data;
        this.invList = data;
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

  delete(invoiceId) {
    var ans = confirm("Do you want to delete customer with  invoiceId: " + invoiceId);
    if (ans) {
      this.invoiceservice.deleteInvoice(invoiceId).subscribe(() => {
        this.getInvoice();
      }, error => console.error(error))
    }
  }

}

interface InvoiceData {
  invoiceId: number;
  invoiceNo: string;
  customerId: number;
  invoiceDate: Date;
  invoiceAmount: string;
  paymentDueDate: Date;
}
