import { Component, inject } from '@angular/core';
import { AddcurrencyFormComponent } from "../../common-ui/addcurrency-form/addcurrency-form.component";
import { AddrateFormComponent } from "../../common-ui/addrate-form/addrate-form.component";
import { Currency } from '../../data/interfaces/currency.interface';
import { CurrencyService } from '../../data/services/currency/currency.service';

@Component({
  selector: 'app-settings-page',
  imports: [AddcurrencyFormComponent, AddrateFormComponent],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent {
  currencyService = inject(CurrencyService)
  currencies: Currency[] = []

  constructor() {

    this.currencyService!.getCurrency()
      .subscribe(val => {
        this.currencies = val
      })
  }
}
