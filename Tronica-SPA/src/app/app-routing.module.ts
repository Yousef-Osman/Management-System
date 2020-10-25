import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { EditEmployeeResolver } from './resolvers/edit-employee.resolver';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "employees/new", component: AddEmployeeComponent },
  { path: "employees/edit/:id", component: EditEmployeeComponent, 
    resolve: {employee: EditEmployeeResolver} },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
