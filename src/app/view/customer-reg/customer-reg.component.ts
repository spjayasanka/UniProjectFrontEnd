import { Component, OnInit } from '@angular/core';
import {Customer} from '../../dto/customer';
import {CustomerService} from '../../service/customer.service';



@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent implements OnInit {
  selectedCustomer: Customer = new Customer('', '', '', '', '', null);

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  saveCustomer(): void {

    this.customerService.saveCustomer(this.selectedCustomer).subscribe(isOk => {
      if (!isOk) {
        alert('Designer has been saved successfully.');
      } else {
        alert('Faild to save Designer.');
      }
    });
  }

}
