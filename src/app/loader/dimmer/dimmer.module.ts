import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const COMPONENTS: any[] = [

];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class DimmerModule { }
