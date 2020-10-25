import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  bsModalRef: BsModalRef;

  constructor(private employeesService: EmployeesService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(){
    this.employeesService.getEmployees().subscribe(data => {
      this.employees = data;
    }, error => {
      console.log(error);
    })
  }

  openModal(id){
    const initialState = {
      list: [''],
      title: 'Confirm',
      employeeId: id
    };
    this.bsModalRef = this.modalService.show(DeleteModalComponent, {initialState});
    // this.bsModalRef.content.closeBtnName = 'Close';
  }

}
