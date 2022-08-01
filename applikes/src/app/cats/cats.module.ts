import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './cats.component';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ApiCatsService } from '../api/api-cats.service';


@NgModule({
  declarations: [
    CatsComponent
  ],
  imports: [
    CommonModule,
    CatsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      ApiCatsService, { dataEncapsulation: false }
    )
  ]
})
export class CatsModule { }
