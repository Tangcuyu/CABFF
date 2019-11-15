import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigscreenRoutingModule } from './bigscreen-routing.module';
import { BigScreenLayoutComponent } from './big-screen-layout/big-screen-layout.component';

@NgModule({
  declarations: [BigScreenLayoutComponent],
  imports: [
    CommonModule,
    BigscreenRoutingModule
  ]
})
export class BigscreenModule { }
