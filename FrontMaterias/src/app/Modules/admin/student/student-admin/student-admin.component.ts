import { NotificationsService } from './../../../../../services/notifications.service';
import { GlobalApiService } from './../../../../Core/global-service';
import { Teacher } from './../../../../model/teacher';
import { Subject } from './../../../../model/subject';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-admin',
  templateUrl: './student-admin.component.html',
  styleUrls: ['./student-admin.component.scss']
})
export class StudentAdminComponent implements OnInit {
  // Form variables
  studentGroup: FormGroup;

  // Variables
  student: Student;
  isEdit = false;
  id: number;

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
          this.getStudent();
        }
      }
    );
  }

  getStudent(): void {
    this.globalService.routes.student.getById()<Student>(this.id).subscribe(
      response => {
        this.student = response;
        this.patchValues(this.student);
      }
    );
  }

  initForm(): void {
    this.studentGroup = this.formBuilder.group({
      studentName: [''],
      career: [''],
      controlNumber: ['']
    });
  }

  patchValues(t: Student): void {
    this.studentGroup.patchValue({
      studentName: t.Name,
      career: t.Career,
      controlNumber: t.Control_number
    });
  }

  saveOrUpdate(): void {
    if (this.studentGroup.valid) {
      const m = this.parseData();
      this.isEdit ? this.update(m) : this.save(m);
    }
  }

  save(m: Student): void {
    this.globalService.routes.student.addStudent()<Teacher>(m).subscribe(
      response => {
        this.location.back();
      },
      error => { }
    );
  }

  update(m: Student): void {
    this.globalService.routes.student.updateStudent()<any>(this.parseData()).subscribe(
      response => { this.location.back(); },
      error => {}
    );
  }

  private parseData(): Student {
    const m: Student = {
      Id: this.id,
      Name: this.studentGroup.get('studentName').value,
      Career: this.studentGroup.get('career').value,
      Control_number: this.studentGroup.get('controlNumber').value
    };
    return m;
  }

  back(): void {
    this.location.back();
  }

  get title(): string {
    return this.isEdit ? 'Modificar Alumnos' : 'Agregar Alumno';
  }
}
