import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-masterpage',
  templateUrl: './masterpage.component.html',
  styleUrls: ['./masterpage.component.css']
})
export class MasterpageComponent implements OnInit {
  data: any;
  dispname: any;
  value: any;
  TotalSalesAndPaymentCollections: any;
  TotalSalesAndPaymentCollection: any;
  ThisMonthSalesAndPaymentCollection: any;
  ThisYearSalesAndPaymentCollection: any;

  constructor(public service: UserserviceService) {
  
    //this.Data = this.service.getDashboard().subscribe((data)=>{
    //  this.Data = data
    //  this.TotalSalesAndPaymentCollection = [['Sales', this.Data[0].totalSeles], ['Payment Collection', this.Data[0].totelPaymentCollestions]];
    //  this.ThisMonthSalesAndPaymentCollection = [['Sales', this.Data[0].salesMonthly], ['Payment Collection', this.Data[0].paymentCollestionsMonthly]];
    //  this.ThisYearSalesAndPaymentCollection = [['Sales', this.Data[0].salesYearly], ['Payment Collection', this.Data[0].paymentCollestionsYearly]];
    //  this.TotalSalesAndPaymentCollections = [['Payment Collection', this.Data[0].totalPaymentCollestions], ['Due Payments', (this.Data[0].totalSeles - this.Data[0].totalPaymentCollestions)]];
    //this.GetDashbordData();
    //}); 
  }

  ngOnInit() {
    this.GetDashbordData();
  }
  GetDashbordData() {
   this.service.getDashboard().subscribe((data) => {
     this.dispname = data.json();
     //this.dispname = Array.of(this.dispname);
    });
  }
}
