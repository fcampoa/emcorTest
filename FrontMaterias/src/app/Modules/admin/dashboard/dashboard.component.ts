import { Component, OnInit } from '@angular/core';
import { CardData } from 'src/app/model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public ItemsCard1: Array<CardData> = [
    { url: 'teacher', iconUrl: 'nc-single-copy-04', title: 'Maestros', description: 'Administrar maestros' },
    { url: 'student', iconUrl: 'nc-settings-gear-65', title: 'Alumnos', description: 'Control de Estudiantes' },
    { url: 'group', iconUrl: 'nc-settings-gear-65', title: 'Grupos', description: 'Administrar materias' },
    { url: 'subject', iconUrl: 'nc-settings-gear-65', title: 'Materias', description: 'Control de grupos' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
