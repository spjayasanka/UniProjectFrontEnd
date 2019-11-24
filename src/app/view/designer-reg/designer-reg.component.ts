import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {Designer} from '../../dto/Designer';
import {DesignerService} from '../../service/designer.service';
import {log} from 'util';
>>>>>>> 46650bb3e6eee734950060afcc97d7b0799f9031

@Component({
  selector: 'app-designer-reg',
  templateUrl: './designer-reg.component.html',
  styleUrls: ['./designer-reg.component.css']
})
export class DesignerRegComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }
=======
  selectedCustomer: Designer = new Designer('', '', '', '', '', null);
  constructor(private designerService: DesignerService) {}
  ngOnInit() {
  }
  saveDesigner(): void {
    this.designerService.saveDesigner(this.selectedCustomer).subscribe(isOk => {

      if (!isOk) {
        alert('Designer has been saved successfully.');
      } else {
        alert('Faild to save Designer.');
      }
    });
  }
>>>>>>> 46650bb3e6eee734950060afcc97d7b0799f9031

}
