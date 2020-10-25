import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/interfaces/department';
import { Employee } from 'src/app/interfaces/employee';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  @Input() eployeeData: Employee;
  employeeForm: FormGroup;
  departments: Department[];

  constructor(private formBuilder: FormBuilder,
              private employeesService: EmployeesService,
              private departmentsService: DepartmentsService,
              private router: Router,
              private route: ActivatedRoute,
              private toasterService: ToastrService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data=> {
      let emp = data['employee'];
      this.employeeForm = this.formBuilder.group({
        id: [emp.id],
        name: [emp.name, [Validators.required]],
        email: [emp.email, [Validators.required, Validators.email]],
        age: [emp.age, [Validators.required]],
        departmentId: [emp.departmentId, [Validators.required]]
      });
    });

    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentsService.getDepartments().subscribe(data => {
      this.departments = data;
    })
  }

  onSubmit() {
    const formData = this.employeeForm.value;
    formData.id = +formData.id;
    formData.departmentId = +formData.departmentId;
    this.employeesService.editEmployee(formData).subscribe(() => {
      this.router.navigate(['/employees']);
      this.toasterService.success("successfully Modified");
    }, error => {
      this.toasterService.error("failed to Modify");
    })
  }
}
