import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];
  employeeId:number;
 
  constructor(public bsModalRef: BsModalRef,
              private employeesService: EmployeesService,
              private router: Router,
              private toasterService: ToastrService) {}
 
  confirm(){
    this.bsModalRef.hide();
    this.employeesService.deleteEmployee(this.employeeId).subscribe(()=>{
      this.router.navigate(['']);
      this.toasterService.success("successfully deleted");
    },error =>{
      this.toasterService.error("failed to delete");
    });
  }

  ngOnInit() {
  }
}
