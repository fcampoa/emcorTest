import { GlobalApiService } from './../../../Core/global-service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  // Variables
  title = 'Lista de alumnos(clic para editar)';
  addRoute = 'student-admin';
  loading = false;
  data: Student[];
  columns: any[] = [
    { header: 'ID', field: 'Id', visible: false },
    { header: 'Nombre', field: 'Name', visible: true },
    { header: 'Carrera', field: 'Career', visible: true },

  ];
  constructor(private apiSvc: GlobalApiService) { }
  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.apiSvc.routes.student.getAll()<any[]>().subscribe(
      response => {
        this.data = response;
        console.log(this.data );
      },
      error => { }
    );
  }
}
