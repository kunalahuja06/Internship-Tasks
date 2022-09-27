import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeServiceService } from 'src/app/services/employee-service/employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
  
  constructor(private modalService: NgbModal,private employeeService:EmployeeServiceService) { 
  }

   openVerticallyCentered(content: any) {
    this.employeeService.employeeFormTitle="edit employee"
    this.modalService.open(content, { centered: true });
  }
  @Input() employee:any
  triggerEdit():void{
    this.employeeService.sendEditData(this.employee)           
  }
}
