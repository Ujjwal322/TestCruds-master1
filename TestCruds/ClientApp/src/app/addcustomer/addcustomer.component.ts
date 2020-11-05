import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customerservice';
import { MessageService } from 'primeng/api';
import { Customer } from '../model/Customer';
//import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './addcustomer.component.html',
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }

        :host ::ng-deep .custom-toast .ui-toast-message {
            background: #FC466B;
            background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);
            background: linear-gradient(to right, #3F5EFB, #FC466B);
        }

        :host ::ng-deep .custom-toast .ui-toast-message div {
            color: #ffffff;
        }

        :host ::ng-deep .custom-toast .ui-toast-message.ui-toast-message-info .ui-toast-close-icon {
            color: #ffffff;
        }
    `],
})

export class createcustomer implements OnInit {
  customerForm: FormGroup;
  title: string = "Create Customer";
  customerId: number;
  errorMessage: any;
  submitted = false;
    Cust2: any;
  Cust1: Customer = new Customer();

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private customerservice: CustomerService, private messageService: MessageService,
    private router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.customerId = this._avRoute.snapshot.params["id"];
    }

    this.customerForm = this._fb.group({
      customerId: 0,

      customerNo: new FormControl('', [Validators.required, Validators.pattern(/^\S*$/)]),
      customerName: new FormControl('', Validators.required),
      //createdBy: '',
      //modifyBy: ''
    })
  }

  ngOnInit() {
    if (this.customerId > 0) {
      this.title = "Edit Customer";
      this.customerservice.getCustomerById(this.customerId)
        .subscribe(resp => this.customerForm.setValue(resp)
          , error => this.errorMessage = error);
    }
  }

  getNo() {
    this.Cust2 = this.customerservice.getCustomerNo().subscribe((data) => this.Cust2 = data);
  }


  //get f() { return this.customerForm.controls; }
  save() {
    this.submitted = true;
    if (!this.customerForm.valid) {
      return;
    }
    if (this.title == "Create Customer") {
      this.customerservice.saveCustomer(this.customerForm.value)
        .subscribe((data) => {
          if (data == 1) {
            this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Add Customer Successfully' })
            //this.toastr.success('Add Customer Successfully');
            }
          else if (data == -1) {
            this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'duplicate customer Name' })
          }
          else if (data == -2) {
            this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'duplicate customer No' })
          }
          else{
            this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'this is time pass code' })
          }


          this.router.navigate(['/fetch-customer']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit Customer") {
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Update Customer Successfully' })
      this.customerservice.updateCustomer(this.customerForm.value)
        .subscribe((data) => {
          this.router.navigate(['/fetch-customer']);
        }, error => this.errorMessage = error)
    }

  }

  cancel() {
    this.router.navigate(['/fetch-customer']);
  }

}
