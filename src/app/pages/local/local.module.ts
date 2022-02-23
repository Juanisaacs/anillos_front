import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LocalRoutingModule } from './local-routing.module';
import { LocalComponent } from './local.component';
import { LocalDetailComponent } from './components/local-detail/local-detail.component';


@NgModule({
  declarations: [
    LocalComponent,
    LocalDetailComponent
  ],
  imports: [
    CommonModule,
    LocalRoutingModule,
    HttpClientModule
  ]
})
export class LocalModule { }
