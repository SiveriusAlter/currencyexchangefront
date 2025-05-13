import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CurrencyCardComponent } from '../../common-ui/currency-card/currency-card.component';
import { CurrencyService } from '../../data/services/currency/currency.service';
import { Currency } from '../../data/interfaces/currency.interface';
import { FindFieldComponent } from "../../common-ui/find-field/find-field.component";
import { FindService } from '../../data/services/find/find.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currecies-page',
  imports: [CurrencyCardComponent, FindFieldComponent],
  templateUrl: './currecies-page.component.html',
  styleUrl: './currecies-page.component.scss'
})
export class CurreciesPageComponent implements OnInit, OnDestroy {
  title = 'currencyexchange';
  currencyService = inject(CurrencyService);
  currencies: Currency[] = [];
  private subs: Subscription = new Subscription;

  constructor(private readonly findService: FindService) {
    this.currencyService!.getCurrency()
      .subscribe(val => {
        this.currencies = val
      });
  }

  ngOnInit(): void {
    this.subs = this.findService.findString$.subscribe((findString) => this.getFindResult(findString));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


  private getFindResult(findString: string): void {
    this.currencyService.findCurrency(findString).subscribe((find) => this.currencies = find);
  }
}
