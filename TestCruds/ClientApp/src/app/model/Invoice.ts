import { DatePipe } from '@angular/common';

export class Invoice {
  invoiceNo: string;
  customerNo: string;
  invoiceDate: Date;
  invoiceAmount: any;
  paymentDueDate: Date;
}
