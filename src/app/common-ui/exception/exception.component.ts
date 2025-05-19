import { Component, Input } from '@angular/core';
import { Errors } from '../../data/interfaces/errors';

@Component({
  selector: 'app-exception',
  imports: [],
  templateUrl: './exception.component.html',
  styleUrl: './exception.component.scss'
})
export class ExceptionComponent {
  @Input() exception!: Errors;
}
