import { GlobalApiService } from './../../../Core/global-service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { Group } from 'src/app/model/group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  // Variables
  title = 'Lista de Grupos';
  addRoute = 'group-admin';
  loading = false;
  data: Group[];
  columns: any[] = [
    { header: 'ID', field: 'Id', visible: false },
    { header: 'Nombre', field: 'Title', visible: true },
    { header: 'Semestre', field: 'Semester', visible: true },

  ];
  constructor(private apiSvc: GlobalApiService) { }
  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.apiSvc.routes.group.getAll()<any[]>().subscribe(
      response => {
        this.data = response;
        console.log(this.data);
      },
      error => { }
    );
  }
}
