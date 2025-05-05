import { Component, inject } from '@angular/core';
import { AddcurrencyFormComponent } from "../../common-ui/addcurrency-form/addcurrency-form.component";
import { AddrateFormComponent } from "../../common-ui/addrate-form/addrate-form.component";
import { Currency } from '../../data/interfaces/currency.interface';
import { CurrencyService } from '../../data/services/currency/currency.service';
import { UpdaterateFormComponent } from "../../common-ui/updaterate-form/updaterate-form.component";
import { ExchangerateService } from '../../data/services/exchangerate/exchangerate.service';
import { ExchangeRate } from '../../data/interfaces/exchangerate.interface';

@Component({
  selector: 'app-settings-page',
  imports: [AddcurrencyFormComponent, AddrateFormComponent, UpdaterateFormComponent],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent {
  currencyService = inject(CurrencyService);
  currencies: Currency[] = [];
    exchangeservice = inject(ExchangerateService);
    exchangerates: ExchangeRate[] = [];
    exr: ExchangeRate = this.exchangerates[0];

  constructor() {

    this.currencyService!.getCurrency()
      .subscribe(val => {
        this.currencies = val
      })

      this.exchangeservice.getRate()
      .subscribe(val => {
        this.exchangerates = val;
      })
  }
}
