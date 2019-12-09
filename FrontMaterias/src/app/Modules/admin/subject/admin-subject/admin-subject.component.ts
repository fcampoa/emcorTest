import { Group } from './../../../../model/group';
import { NotificationsService } from 'src/services/notifications.service';
import { GlobalApiService } from './../../../../Core/global-service';
import { Teacher } from './../../../../model/teacher';
import { Subject } from './../../../../model/subject';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-subject',
  templateUrl: './admin-subject.component.html',
  styleUrls: ['./admin-subject.component.scss']
})
export class AdminSubjectComponent implements OnInit {

  // Form variables
  subjectGroup: FormGroup;

  // Variables
  subject: Subject;
  isEdit = false;
  id: number;
  groupRoute = 'group-admin';

  // Arrays
  groups: Group[] = [];
  columns = [
    { header: 'Titulo', field: 'Title', visible: true },
    { header: 'Aula', field: 'Room', visible: true },
    { header: 'Horario', field: 'Schedule', visible: true }
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
          this.getSubject();
        }
      }
    );
  }

  getSubject(): void {
    this.globalService.routes.subject.getById()<Teacher>(this.id).subscribe(
      response => {
        this.subject = response;
        this.patchValues(this.subject);
        this.getGroups();
      }
    );
  }

  initForm(): void {
    this.subjectGroup = this.formBuilder.group({
      subjectName: [''],
    });
  }

  patchValues(t: Teacher): void {
    this.subjectGroup.patchValue({
      subjectName: t.Name
    });
  }

  saveOrUpdate(): void {
    if (this.subjectGroup.valid) {
      const m = this.parseData();
      this.isEdit ? this.update(m) : this.save(m);
    }
  }

  save(m: Subject): void {
    this.globalService.routes.subject.addSubject()<Subject>(m).subscribe(
      response => {
        this.location.back();
      },
      error => { }
    );
  }

  update(m: Subject): void {
    this.globalService.routes.subject.updateSubject()<any>(this.parseData()).subscribe(
      response => { this.location.back(); },
      error => {}
    );
  }

  private parseData(): Subject {
    const m: Subject = {
      Id: this.id,
      Name: this.subjectGroup.get('subjectName').value
    };
    return m;
  }

  back(): void {
    this.location.back();
  }

  get title(): string {
    return this.isEdit ? 'Cambiar materia' : 'Agregar Materia';
  }

  getGroups(): void {
    this.globalService.routes.group.getBySubject(this.id)<Group[]>().subscribe(
      response => this.groups = response
    );
  }
}
