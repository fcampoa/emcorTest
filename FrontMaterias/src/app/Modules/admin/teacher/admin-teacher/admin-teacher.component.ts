import { NotificationsService } from 'src/services/notifications.service';
import { GlobalApiService } from './../../../../Core/global-service';
import { Teacher } from './../../../../model/teacher';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.scss']
})
export class AdminTeacherComponent implements OnInit {

  // Form variables
  teacherGroup: FormGroup;

  // Variables
  teacher: Teacher;
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
          this.getTeacher();
        }
      }
    );
  }

  getTeacher(): void {
    this.globalService.routes.teacher.getById()<Teacher>(this.id).subscribe(
      response => {
        this.teacher = response;
        this.patchValues(this.teacher);
      }
    );
  }

  initForm(): void {
    this.teacherGroup = this.formBuilder.group({
      teacherName: [''],
    });
  }

  patchValues(t: Teacher): void {
    this.teacherGroup.patchValue({
      teacherName: t.Name
    });
  }

  saveOrUpdate(): void {
    if (this.teacherGroup.valid) {
      const m = this.parseData();
      this.isEdit ? this.update(m) : this.save(m);
    }
  }

  save(m: Teacher): void {
    this.globalService.routes.teacher.addTeacher()<Teacher>(m).subscribe(
      response => {
        this.notify.successMessage('Maestro registrado.');
        this.location.back();
      },
      error => { }
    );
  }

  update(m: Teacher): void {
    this.globalService.routes.teacher.updateTeacher()<any>(this.parseData()).subscribe(
      response => { this.location.back(); },
      error => {}
    );
  }

  private parseData(): Teacher {
    const m: Teacher = {
      Id: this.id,
      Name: this.teacherGroup.get('teacherName').value
    };
    return m;
  }

  back(): void {
    this.location.back();
  }

  get title(): string {
    return this.isEdit ? 'Actualizar Maestro' : 'Agregar Maestro';
  }
}
