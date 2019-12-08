import { GlobalServiceModule } from './Core/global-service.module';
import { GlobalApiService } from './Core/global-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuickAppProMaterialModule } from './Modules/material.module';
import { AdminModule } from './Modules/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    GlobalServiceModule.forRoot()
  ],
  providers: [ GlobalApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
