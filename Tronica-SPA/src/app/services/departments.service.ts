import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Department } from '../interfaces/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getDepartments() {
    return this.http.get<Department[]>(this.baseUrl + 'departments');
  }
}
