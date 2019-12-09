import { GlobalApiService } from './../../../Core/global-service';

import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/model/teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  // Variables
  title = 'Lista de maestros(clicl para editar)';
  addRoute = 'teacher-admin';
  loading = false;
  data: Teacher[];
  columns: any[] = [
    { header: 'ID', field: 'Id', visible: false },
    { header: 'Nombre', field: 'Name', visible: true }
  ];
  constructor(private apiSvc: GlobalApiService) { }
  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.apiSvc.routes.teacher.getAll()<any[]>().subscribe(
      response => {
        this.data = response;
        console.log(this.data );
      },
      error => { }
    );
  }
}
