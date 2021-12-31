import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DimmerModule } from './dimmer/dimmer.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';

const MODULES = [
  DimmerModule,
];

const COMPONENTS = [
  ProgressBarComponent,
  SpinnerComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ...MODULES,
  ],
  exports:[
    ...MODULES,
    ...COMPONENTS,
  ],
})
export class LoaderModule { }
