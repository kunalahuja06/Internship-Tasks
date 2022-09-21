import { Component, OnInit,ViewEncapsulation } from '@angular/core';
 import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
  
  constructor(private modalService: NgbModal) {}

   openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
