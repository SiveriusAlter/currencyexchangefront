import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CurrencyService } from '../../data/services/currency/currency.service';
import { Currency } from '../../data/interfaces/currency.interface';
import { ExcahngeFormComponent } from "../../common-ui/excahnge-form/excahnge-form.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exchanges-page',
  imports: [ExcahngeFormComponent],
  templateUrl: './exchanges-page.component.html',
  styleUrl: './exchanges-page.component.scss'
})
export class ExchangesPageComponent {
  currencyService = inject(CurrencyService)
  currencies: Currency[] = []

  constructor() {

    this.currencyService!.getCurrency()
      .subscribe(val => {
        this.currencies = val
      })
  }
}
