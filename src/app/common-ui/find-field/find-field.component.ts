import { Component } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';

@Component({
  selector: 'app-find-field',
  imports: [SvgComponent],
  templateUrl: './find-field.component.html',
  styleUrl: './find-field.component.scss'
})
export class FindFieldComponent {

  loupe = "loupe";
}
