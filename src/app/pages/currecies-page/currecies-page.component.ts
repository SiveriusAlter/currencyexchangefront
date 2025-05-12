import { Component, inject } from '@angular/core';
import { CurrencyCardComponent } from '../../common-ui/currency-card/currency-card.component';
import { CurrencyService } from '../../data/services/currency/currency.service';
import { Currency } from '../../data/interfaces/currency.interface';
import { FindFieldComponent } from "../../common-ui/find-field/find-field.component";

@Component({
  selector: 'app-currecies-page',
  imports: [CurrencyCardComponent, FindFieldComponent],
  templateUrl: './currecies-page.component.html',
  styleUrl: './currecies-page.component.scss'
})
export class CurreciesPageComponent {
  title = 'currencyexchange';
  currencyService = inject(CurrencyService)
  currencies: Currency[] = []

  constructor() {
    this.currencyService!.getCurrency()
      .subscribe(val => {
        this.currencies = val
      })
  }
}
