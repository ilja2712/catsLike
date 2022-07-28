import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './cats.component';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';


@NgModule({
  declarations: [
    CatsComponent
  ],
  imports: [
    CommonModule,
    CatsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule
  ]
})
export class CatsModule { }
