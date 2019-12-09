import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GlobalServiceModule } from './Core/global-service.module';
import { GlobalApiService } from './Core/global-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuickAppProMaterialModule } from './Modules/material.module';
import { AdminModule } from './Modules/admin/admin.module';
import { NotificationsService } from 'src/services/notifications.service';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    GlobalServiceModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [GlobalApiService, NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
