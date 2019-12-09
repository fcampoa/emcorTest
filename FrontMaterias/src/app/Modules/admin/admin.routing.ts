import { GroupAdminComponent } from './group/group-admin/group-admin.component';
import { GroupComponent } from './group/group.component';
import { AdminSubjectComponent } from './subject/admin-subject/admin-subject.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentAdminComponent } from './student/student-admin/student-admin.component';
import { StudentComponent } from './student/student.component';
import { AdminTeacherComponent } from './teacher/admin-teacher/admin-teacher.component';
import { TeacherComponent } from './teacher/teacher.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
 { path: 'dashboard', component: DashboardComponent},
 { path: 'teacher', component: TeacherComponent},
 { path: 'teacher-admin', component: AdminTeacherComponent},
 { path: 'teacher-admin/:id', component: AdminTeacherComponent},
 { path: 'student', component: StudentComponent},
 { path: 'student-admin', component: StudentAdminComponent},
 { path: 'student-admin/:id', component: StudentAdminComponent},
 { path: 'subject', component: SubjectComponent},
 { path: 'subject-admin', component: AdminSubjectComponent},
 { path: 'subject-admin/:id', component: AdminSubjectComponent},
 { path: 'group', component: GroupComponent},
 { path: 'group-admin', component: GroupAdminComponent},
 { path: 'group-admin/:id', component: GroupAdminComponent}
];
