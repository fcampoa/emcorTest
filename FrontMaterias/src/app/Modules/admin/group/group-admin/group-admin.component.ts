import { NotificationsService } from 'src/services/notifications.service';
import { ResponseStatus } from './../../../../Core/support/response-status.enum';
import { GroupDetail } from './../../../../model/group-detail';
import { GlobalApiService } from './../../../../Core/global-service';
import { Teacher } from './../../../../model/teacher';
import { Subject } from './../../../../model/subject';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Student } from 'src/app/model/student';
import { Group } from 'src/app/model/group';

@Component({
  selector: 'app-group-admin',
  templateUrl: './group-admin.component.html',
  styleUrls: ['./group-admin.component.scss']
})
export class GroupAdminComponent implements OnInit {
  // Form variables
  classGroup: FormGroup;

  // Variables
  group: Group;
  isEdit = false;
  id: number;

  // Arrays
  teachers: Teacher[];
  students: Student[] = [];
  subjects: Subject[];
  groupStudents: Student[] = [];
  groupDetails: GroupDetail[] = [];
  deletedDetails: GroupDetail[] = [];
  columns = [
    { header: 'Nombre', field: 'Name', visible: true }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private globalService: GlobalApiService,
    private route: ActivatedRoute,
    private location: Location,
    private notify: NotificationsService
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        if (this.id && this.id > 0) {
          this.isEdit = true;
          this.getGroup();
        }
      }
    );
    this.getData();
  }

  getGroup(): void {
    this.globalService.routes.group.getById()<Group>(this.id).subscribe(
      response => {
        this.group = response;
        this.patchValues(this.group);
        this.globalService.routes.groupDetail.getByGroup(this.id)<GroupDetail[]>().subscribe(
          res => {
            this.groupDetails = res;
            this.groupDetails.forEach(x => {
              this.globalService.routes.student.getById()<Student>(x.Id).subscribe(
                student => this.add(student)
              );
            }
            );
          }
        );
      }
    );
  }

  initForm(): void {
    this.classGroup = this.formBuilder.group({
      groupTitle: [''],
      teacherSelect: [''],
      subjectSelect: [''],
      groupRoom: [''],
      groupSemester: [''],
      groupSchedule: ['']
    });
  }

  patchValues(t: Group): void {
    this.classGroup.patchValue({
      groupTitle: t.Title,
      groupSchedule: t.Schedule,
      teacherSelect: t.Teacher_id,
      subjectSelect: t.Subject_id,
      groupRoom: t.Room,
      groupSemester: t.Semester
    });
  }

  saveOrUpdate(): void {
    if (this.classGroup.valid) {
      const m = this.parseData();
      this.isEdit ? this.update(m) : this.save(m);
    }
  }

  save(m: Group): void {
    this.globalService.routes.group.addGroup()<any>(m).subscribe(
      response => {
        if (response.ResponseStatusType === ResponseStatus.success) {
          this.group = response.data;
          this.id = this.group.Id;
          this.createDetails();
          this.globalService.routes.groupDetail.addRange()<any>(this.groupDetails).subscribe(
            res => {
              if (response.ResponseStatusType === ResponseStatus.success) {
                this.location.back();
              }
            }
          );
        }
      },
      error => { }
    );
  }

  update(m: Group): void {
    this.globalService.routes.group.updateGroup()<any>(m).subscribe(
      response => {
        this.createDetails();
        this.globalService.routes.groupDetail.addRange()<any>(this.groupDetails).subscribe(
          res => {
            if (response.ResponseStatusType === ResponseStatus.success) {
            }
          }
        );
        if (this.deletedDetails.length > 0) {
          this.deletedDetails.forEach(x => this.globalService.routes.groupDetail.deleteDetail()<any>(x).subscribe(
            () => { }
          ));
        }
        this.location.back();
      },
      error => { }
    );
  }

  saveOrUpdateDetails(): void {

  }

  createDetails(): void {
    if (this.isEdit) {
      const auxDetail: GroupDetail[] = [];
      this.groupStudents.forEach(x => {
        const aux = this.groupDetails.find(d => d.Student_id === x.Id);
        if (aux === undefined || aux === null) {
          auxDetail.push({ Student_id: x.Id, Group_id: this.id });
        }
      }
      );
      this.groupDetails = [];
      this.groupDetails = auxDetail;
    } else {
      this.groupStudents.forEach(x => this.groupDetails.push({ Student_id: x.Id, Group_id: this.id }));
    }
  }

  private parseData(): Group {
    const m: Group = {
      Id: this.id,
      Title: this.classGroup.get('groupTitle').value,
      Room: this.classGroup.get('groupRoom').value,
      Schedule: this.classGroup.get('groupSchedule').value,
      Subject_id: this.classGroup.get('subjectSelect').value,
      Teacher_id: this.classGroup.get('teacherSelect').value,
      Semester: this.classGroup.get('groupSemester').value
    };
    return m;
  }

  back(): void {
    this.location.back();
  }

  get title(): string {
    return this.isEdit ? 'Modificar grupo' : 'Agregar Grupo';
  }

  getData(): void {
    this.globalService.routes.teacher.getAll()<Teacher[]>().subscribe(
      response => this.teachers = response
    );
    this.globalService.routes.subject.getAll()<Subject[]>().subscribe(
      response => this.subjects = response
    );
    this.globalService.routes.student.getAll()<Student[]>().subscribe(
      response => this.students = response
    );
  }

  add(e: any): void {
    let aux: Student[] = [];
    this.groupStudents.forEach(x => aux.push(x));
    this.groupStudents = [];
    aux.push(e);
    this.groupStudents = aux;
    aux = [];
    const i = this.students.indexOf(e);
    this.students.splice(i, 1);
    this.students.forEach(x => aux.push(x));
    this.students = aux;
    const detailAux = this.deletedDetails.find(d => d.Student_id === e.Id);
    if (detailAux !== undefined && detailAux !== null) {
      const a: GroupDetail[] = [];
      const x = this.deletedDetails.indexOf(detailAux);
      this.deletedDetails.splice(i, 1);
      this.deletedDetails.forEach(d => a.push(d));
      this.deletedDetails = a;
    }
  }
  delete(e: any): void {
    let aux: Student[] = [];
    this.students.forEach(x => aux.push(x));
    this.students = [];
    aux.push(e);
    this.students = aux;
    aux = [];
    const i = this.groupStudents.indexOf(e);
    this.groupStudents.splice(i, 1);
    this.groupStudents.forEach(x => aux.push(x));
    this.groupStudents = aux;
    const detailAux = this.groupDetails.find(d => d.Student_id === e.Id);
    if (detailAux !== undefined && detailAux !== null) {
      this.deletedDetails.push(detailAux);
    }
  }
}
