//import { NgModule } from '@angular/core';
//import { FetchCustomerComponent } from './fetchcustomer/fetchcustomer.component';
//import { createcustomer } from './addcustomer/addcustomer.component';
//import { FetchInvoiceComponent } from './fetchinvoice/fetchinvoice.component';
//import { FetchPaymentComponent } from './fetchpayment/fetchpayment.component';
//import { FetchDetailsComPonent } from './fetchdetalis/fetchdetails.component';
//import { FetchReportComponent } from './fetch-report/fetch-report.component';
//import { createinvoice } from './addinvoice/addinvoice.component';
//import { createpayment } from './addpayment/addpayment.component';
//import { UserComponent } from './user/user.component';
//import { RegistrationComponent } from './user/registration/registration.component';
//import { LoginComponent } from './user/login/login.component';
//import { HomeComponent } from './home/home.component';
//import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from './auth/auth.guard';
//const routes: Routes = [
//  { path:'', redirectTo:'/user/login', pathMatch:'full' },
//  {
//    path: 'user', component: UserComponent,
//    children: [
//      { path: 'registration', component: RegistrationComponent },
//      { path: 'login', component: LoginComponent }
//    ]
//  },
//  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]}
//];
//@NgModule({
//  imports: [RouterModule.forRoot(routes)],
//  exports: [RouterModule]
//})
//export class AppRoutingModule { }
//# sourceMappingURL=app-routing.module.js.map