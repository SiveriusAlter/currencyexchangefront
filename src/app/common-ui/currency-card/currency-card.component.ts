import { Component, Input } from '@angular/core';
import { Currency } from '../../data/interfaces/currency.interface';

@Component({
  selector: 'app-currency-card',
  imports: [],
  templateUrl: './currency-card.component.html',
  styleUrl: './currency-card.component.scss'
})
export class CurrencyCardComponent {
  @Input() currency!: Currency;
}
