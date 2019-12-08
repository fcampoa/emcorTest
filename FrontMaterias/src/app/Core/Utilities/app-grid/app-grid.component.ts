import { GlobalApiService } from './../../global-service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.scss']
})
export class AppGridComponent implements OnInit, AfterViewInit {

  // Inputs section
  @Input() set data(data: any[]) {
    this.dataSource = new MatTableDataSource<any>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  @Input() columns: any[];
  @Input() showPager = false;
  @Input() editRoute: string;
  @Input() showActions = false;
  @Input() allowAdd = false;
  @Input() id: number;
  @Input() mod = '';

  // Outputs
  @Output() action: EventEmitter<any> = new EventEmitter<any>();

  // ViewChilds section
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // Variables section
  displayedColumns: string[];
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);

  // Actions
  showDelete = false;

  constructor(private route: Router,
              private apiSvc: GlobalApiService) {
  }

  ngOnInit() {
    this.getHeaders(this.columns);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  getHeaders(columns: any[]): void {
    this.displayedColumns = [];
    columns.map(h => {
      if (h.visible) {
        this.displayedColumns.push(h.field);
      }
    });
    if (this.showActions) { this.displayedColumns.push('actions'); }
  }

  rowClick(item: any): void {
    this.allowAdd ? this.result(item) : this.edit(item);
  }

  edit(item: any): void {
    this.route.navigate([this.editRoute + '/' + item.id]);
  }

  result(row: any): void {
    this.action.emit(row);
  }

  show(item: any): boolean {
    if (typeof item.show !== 'undefined' && item.show === false) {
      return false;
    }
    return true;
  }

  getData() {
    return this.dataSource;
  }
}
