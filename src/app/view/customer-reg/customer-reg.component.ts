import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {Customer} from '../../dto/customer';
import {CustomerService} from '../../service/customer.service';


>>>>>>> 46650bb3e6eee734950060afcc97d7b0799f9031

@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }
=======
  selectedCustomer: Customer = new Customer('', '', '', '', '', null);

  constructor(private customerService: CustomerService) { }
>>>>>>> 46650bb3e6eee734950060afcc97d7b0799f9031

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  saveCustomer(): void {

    this.customerService.saveCustomer(this.selectedCustomer).subscribe(isOk => {
      if (!isOk) {
        alert('Designer has been saved successfully.');
      } else {
        alert('Faild to save Designer.');
      }
    });
  }

>>>>>>> 46650bb3e6eee734950060afcc97d7b0799f9031
}
