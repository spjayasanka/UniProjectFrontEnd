import { Component, OnInit } from '@angular/core';
import {Designer} from '../../dto/Designer';
import {DesignerService} from '../../service/designer.service';
import {log} from 'util';

@Component({
  selector: 'app-designer-reg',
  templateUrl: './designer-reg.component.html',
  styleUrls: ['./designer-reg.component.css']
})
export class DesignerRegComponent implements OnInit {

  selectedDesigner: Designer = new Designer('', '', '', '', '', null);
  constructor(private designerService: DesignerService) {}
  ngOnInit() {
  }
  saveDesigner(): void {
    this.designerService.saveDesigner(this.selectedDesigner).subscribe(isOk => {

      if (!isOk) {
        alert('Designer has been saved successfully.');
      } else {
        alert('Faild to save Designer.');
      }
    });
  }

}
