import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CurrencyService } from '../../data/services/currency/currency.service';
import { Currency } from '../../data/interfaces/currency.interface';
import { ExcahngeFormComponent } from "../../common-ui/excahnge-form/excahnge-form.component";
import { Subscription } from 'rxjs';
import { FindService } from '../../data/services/find/find.service';

@Component({
  selector: 'app-exchanges-page',
  imports: [ExcahngeFormComponent],
  templateUrl: './exchanges-page.component.html',
  styleUrl: './exchanges-page.component.scss'
})
export class ExchangesPageComponent {
  currencyService = inject(CurrencyService);
  currencies: Currency[] = [];


  constructor() {

    this.currencyService!.getCurrency()
      .subscribe(val => {
        this.currencies = val;
      })
  }
}
