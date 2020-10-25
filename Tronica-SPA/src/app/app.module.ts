//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

//resolvers
import { EditEmployeeResolver } from './resolvers/edit-employee.resolver';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    DeleteModalComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot()
  ],
  entryComponents:[
    DeleteModalComponent
  ],
  providers: [
    BsModalService,
    BsModalRef,
    EditEmployeeResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
