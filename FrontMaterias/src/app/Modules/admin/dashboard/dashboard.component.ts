import { Component, OnInit } from '@angular/core';
import { CardData } from 'src/app/model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public ItemsCard1: Array<CardData> = [
    { url: 'teacher', iconUrl: 'nc-single-copy-04', title: 'Maestros', description: 'Reporte de produccion' },
    { url: 'student', iconUrl: 'nc-settings-gear-65', title: 'Control', description: 'Control de supervisor' },
    { url: 'group', iconUrl: 'nc-settings-gear-65', title: 'Control', description: 'Control de supervisor' },
    { url: 'subject', iconUrl: 'nc-settings-gear-65', title: 'Control', description: 'Control de supervisor' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
