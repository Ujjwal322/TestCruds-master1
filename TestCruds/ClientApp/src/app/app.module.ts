import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FetchCustomerComponent } from './fetchcustomer/fetchcustomer.component';
import { CustomerService } from './services/customerservice';
import { HttpModule } from '@angular/http';
import { createcustomer } from './addcustomer/addcustomer.component';
import { FetchInvoiceComponent } from './fetchinvoice/fetchinvoice.component';
import { InvoiceService } from './services/invoiceservice';
import { PaymentService } from './services/paymentservice';
import { FetchPaymentComponent } from './fetchpayment/fetchpayment.component';
import { FetchDetailsComPonent } from './fetchdetalis/fetchdetails.component';
import { FetchReportComponent } from './fetch-report/fetch-report.component';
import { createinvoice } from './addinvoice/addinvoice.component';
import { createpayment } from './addpayment/addpayment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { DataTableModule } from "angular-6-datatable";
//import { DataTablesModule } from 'angular-datatables';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ToastyModule } from 'ng2-toasty';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserserviceService } from './services/userservice.service';
import { LoginComponent } from './user/login/login.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MasterpageComponent } from './masterpage/masterpage.component';
import { APP_BASE_HREF } from '@angular/common';
//import { AuthGuard } from './auth/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FetchCustomerComponent,
    createcustomer,
    createinvoice,
    createpayment,
    FetchInvoiceComponent,
    FetchPaymentComponent,
    FetchDetailsComPonent,
    FetchReportComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    MasterpageComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    //DataTableModule,
   //DataTablesModule,
    TableModule,
    ToastModule,
    PaginatorModule,
    ToastyModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'fetch-customer', component: FetchCustomerComponent },
      { path: 'fetch-invoice', component: FetchInvoiceComponent },
      { path: 'fetch-payment', component: FetchPaymentComponent },
      { path: 'fetch-details', component: FetchDetailsComPonent },
      { path: 'fetch-report', component: FetchReportComponent },
      { path: 'register-employee', component: createcustomer },
      { path: 'customer/edit/:id', component: createcustomer },
      { path: 'register-invoice', component: createinvoice },
      { path: 'invoice/edit/:id', component: createinvoice },
      { path: 'register-payment', component: createpayment },
      { path: 'payment/edit/:id', component: createpayment },
      //{ path: '**', redirectTo: 'home' },

      { path:'',redirectTo:'/user/login',pathMatch: 'full' },
      {
        path: 'user', component: UserComponent,
        children: [
          { path:'registration', component: RegistrationComponent },
          { path:'login', component: LoginComponent }
        ]
      },
      { path: 'home', component: HomeComponent}
    ])
  ],
  providers: [CustomerService, InvoiceService, PaymentService, UserserviceService, MessageService, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
