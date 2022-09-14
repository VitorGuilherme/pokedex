import { CommonModule } from '@angular/common';

//Modules
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

//Module routing
import { RoutingModule } from './home/routing.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
