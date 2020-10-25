import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from '../interfaces/employee';
import { EmployeesService } from '../services/employees.service';


@Injectable()
export class EditEmployeeResolver implements Resolve<Employee> {
  constructor(private employeesService: EmployeesService,
    private router: Router,) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Employee> {
    return this.employeesService.getEmployee(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/employees']);
        return of(null);
      })
    );
  }
}