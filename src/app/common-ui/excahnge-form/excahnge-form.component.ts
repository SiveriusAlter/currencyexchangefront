import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { Currency } from '../../data/interfaces/currency.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExchangeService } from '../../data/services/exchange/exchange.service';
import { ExchangeResult } from '../../data/interfaces/exchangeresult';

@Component({
  selector: 'app-excahnge-form',
  imports: [ReactiveFormsModule],
  templateUrl: './excahnge-form.component.html',
  styleUrl: './excahnge-form.component.scss'
})
export class ExcahngeFormComponent {

  baseCurrency: string | null | undefined = 'RUB';
  targetCurrency: string | null | undefined = 'USD';

  constructor() {
  }
  fb = inject(FormBuilder);
  @Input() currencies!: Currency[];

  exchangeService: ExchangeService = inject(ExchangeService);
  exchangeResult: ExchangeResult | undefined;


  form = this.fb.group(
    {
      baseCurrency: [this.baseCurrency, Validators.required],
      targetCurrency: [this.targetCurrency, Validators.required],
      amount: [100],
    }
  );

  saveCurrency() {
    this.baseCurrency = this.form.get('baseCurrency')?.value;
    this.targetCurrency = this.form.get('targetCurrency')?.value;
  }



  ngOnInit(): void {
    this.form.get('baseCurrency')?.valueChanges.subscribe(
      (newBaseCurrency) => {
        const targetCurrencyControl = this.form.get('targetCurrency');
        if (newBaseCurrency === this.targetCurrency && targetCurrencyControl?.value === this.targetCurrency) {
          targetCurrencyControl?.setValue(this.baseCurrency);
        };
        let selectElement = document.querySelectorAll('select') as NodeListOf<HTMLSelectElement>;
        selectElement[0]?.blur();
        this.onSubmit();
      }
    );

    this.form.get('targetCurrency')?.valueChanges.subscribe(
      (newTargetCurrency) => {
        const baseCurrencyControl = this.form.get('baseCurrency');
        if (newTargetCurrency === this.baseCurrency && baseCurrencyControl?.value === this.baseCurrency) {
          baseCurrencyControl?.setValue(this.targetCurrency);
        };
        let selectElement = document.querySelectorAll('select') as NodeListOf<HTMLSelectElement>;
        selectElement[1]?.blur();
        this.onSubmit();
      }
    );
  }
  // get filteredBaseCurrencies() {
  //   const targetCurrency = this.form.get('targetCurrency')?.value;
  //   return this.currencies.filter(currency => currency.code !== targetCurrency);
  // }

  // get filteredTargetCurrencies() {
  //   const baseCurrency = this.form.get('baseCurrency')?.value;
  //   return this.currencies.filter(currency => currency.code !== baseCurrency);
  // }

  onSubmit() {
    console.log(this.form.value)
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();

    let baseCurrency = this.form.value.baseCurrency as string;
    let targetCurrency = this.form.value.targetCurrency as string;
    let amount = this.form.value.amount as number;

    let excahnge = {
      baseCurrency,
      targetCurrency,
      amount
    }

    this.exchangeService.getAmount(excahnge).subscribe(val => this.exchangeResult = val);
  }
}
