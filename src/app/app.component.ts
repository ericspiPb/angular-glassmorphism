import { Component } from '@angular/core';
import { SpinnerSize } from './loader/spinner/spinner.size.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'glassmorphism';
  spinnerSize: SpinnerSize = SpinnerSize.Default;
}
