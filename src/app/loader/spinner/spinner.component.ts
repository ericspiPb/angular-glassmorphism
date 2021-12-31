import { NumberInput } from '@angular/cdk/coercion/number-property';
import { Component, Input } from '@angular/core';
import { SpinnerSize } from './spinner.size.enum';

@Component({
  selector: 'loader-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() size: NumberInput = SpinnerSize.Default;
}
