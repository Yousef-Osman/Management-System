import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../interfaces/employee';

const httpOptions = {
  headers: new HttpHeaders({})
};

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl + 'employees');
  }

  getEmployee(id) {
    return this.http.get<Employee>(this.baseUrl + 'employees/' + id);
  }

  addEmployee(employee: Employee) {
    return this.http.post(this.baseUrl + 'employees', employee);
  }

  editEmployee(employee: Employee) {
    return this.http.put(this.baseUrl + 'employees', employee);
  }

  deleteEmployee(id) {
    return this.http.delete(this.baseUrl + 'employees/' + id, httpOptions);
  }
}
