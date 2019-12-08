import { LoaderComponent } from './loader/loader.component';
import { ReportViewerComponent } from './report-viewer/report-viewer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CommonModule } from '@angular/common';
import { QuickAppProMaterialModule } from '../../modules/material.module';
import { AppGridComponent } from './app-grid/app-grid.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { NgModule } from '@angular/core';
import { AppViewComponent } from './app-view/app-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    QuickAppProMaterialModule
  ],
  declarations: [
    TaskCardComponent,
    AppViewComponent,
    AppGridComponent,
    AppHeaderComponent,
    ReportViewerComponent,
    LoaderComponent
  ],
  exports: [
    TaskCardComponent,
    AppViewComponent,
    AppGridComponent,
    AppHeaderComponent,
    ReportViewerComponent,
    LoaderComponent
  ]
})

export class UtilitiesModule { }
