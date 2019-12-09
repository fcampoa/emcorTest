import { GroupAdminComponent } from './group/group-admin/group-admin.component';
import { GroupComponent } from './group/group.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentAdminComponent } from './student/student-admin/student-admin.component';
import { StudentComponent } from './student/student.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminTeacherComponent } from './teacher/admin-teacher/admin-teacher.component';
import { TeacherComponent } from './teacher/teacher.component';
import { QuickAppProMaterialModule } from './../material.module';
import { UtilitiesModule } from './../../Core/Utilities/utilities.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSubjectComponent } from './subject/admin-subject/admin-subject.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    UtilitiesModule,
    FlexLayoutModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    TeacherComponent,
    AdminTeacherComponent,
    StudentComponent,
    StudentAdminComponent,
    SubjectComponent,
    AdminSubjectComponent,
    GroupComponent,
    GroupAdminComponent
  ]
})
export class AdminModule { }
