import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ViewportComponent } from './viewport/viewport.component';
import { GenerateTableComponent } from './generate-table/generate-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideNavComponent,
    ViewportComponent,
    GenerateTableComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
