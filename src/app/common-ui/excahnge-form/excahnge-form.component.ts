import { Component, Input } from '@angular/core';
import { Currency } from '../../data/interfaces/currency.interface';

@Component({
  selector: 'app-excahnge-form',
  imports: [],
  templateUrl: './excahnge-form.component.html',
  styleUrl: './excahnge-form.component.scss'
})
export class ExcahngeFormComponent {
 @Input() currencies!: Currency[];
}
