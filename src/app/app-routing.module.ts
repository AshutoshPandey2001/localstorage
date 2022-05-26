import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamscheduleComponent } from './examschedule/examschedule.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffComponent } from './staff/staff.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'reg',
    component:RegistrationComponent
  },
  {
    path:'teacher',
    component:TeachersComponent
  },
  {
    path:'student',
    component:StudentsComponent
  },
  {
    path:'staff',
    component:StaffComponent
  },
  {
    path:'exam',
    component:ExamscheduleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
