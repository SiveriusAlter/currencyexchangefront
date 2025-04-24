import { Component, Input } from '@angular/core';
import { ExchangeRate } from '../../data/interfaces/exchangerate.interface';

@Component({
  selector: 'app-exchangerate-card',
  imports: [],
  templateUrl: './exchangerate-card.component.html',
  styleUrl: './exchangerate-card.component.scss'
})
export class ExchangerateCardComponent {
  @Input() exchangerate!: ExchangeRate;
}
