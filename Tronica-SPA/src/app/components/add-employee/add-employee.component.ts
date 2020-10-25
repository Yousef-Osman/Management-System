import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/interfaces/department';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  departments: Department[];

  constructor(private formBuilder: FormBuilder,
              private employeesService: EmployeesService,
              private departmentsService: DepartmentsService,
              private router: Router,
              private toasterService: ToastrService) {
    this.employeeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required]],
      departmentId: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(){
    this.departmentsService.getDepartments().subscribe(data=>{
      this.departments = data;
    })
  }

  onSubmit(){
    const formData = this.employeeForm.value;
    formData.departmentId = +formData.departmentId;
    this.employeesService.addEmployee(formData).subscribe(()=>{
      this.router.navigate(['/employees']);
      this.toasterService.success("successfully added");
    },error => {
      this.toasterService.error("failed to add");
    })
  }
}
