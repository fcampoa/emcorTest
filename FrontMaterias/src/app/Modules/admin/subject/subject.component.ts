import { GlobalApiService } from './../../../Core/global-service';

import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/model/teacher';
import { Subject } from 'src/app/model/subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {


  // Variables
  title = 'Lista de materias(clic para editar)';
  addRoute = 'subject-admin';
  loading = false;
  data: Subject[];
  columns: any[] = [
    { header: 'ID', field: 'Id', visible: false },
    { header: 'Nombre', field: 'Name', visible: true }
  ];
  constructor(private apiSvc: GlobalApiService) { }
  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.apiSvc.routes.subject.getAll()<any[]>().subscribe(
      response => {
        this.data = response;
        console.log(this.data );
      },
      error => { }
    );
  }
}
