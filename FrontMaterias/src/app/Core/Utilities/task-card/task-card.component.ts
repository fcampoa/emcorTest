import { Router } from '@angular/router';
import { CardData } from '../../../model/data';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() data: CardData;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  goTo() {
    console.log(this.data.url);
    this.route.navigate([this.data.url]);
  }


}
