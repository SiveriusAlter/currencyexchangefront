import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExchangeRate } from '../../data/interfaces/exchangerate.interface';
import { ExchangerateService } from '../../data/services/exchangerate/exchangerate.service';
import { Currency } from '../../data/interfaces/currency.interface';
import { Errors } from '../../data/interfaces/errors';
import { ExceptionComponent } from "../exception/exception.component";

@Component({
  selector: 'app-addrate-form',
  imports: [ReactiveFormsModule, ExceptionComponent],
  templateUrl: './addrate-form.component.html',
  styleUrl: './addrate-form.component.scss'
})
export class AddrateFormComponent {
  fb = inject(FormBuilder);
  @Input() currencies!: Currency[];

  baseCurrency: string | null | undefined = 'RUB';
  targetCurrency: string | null | undefined = 'USD';

  exception: Errors = { ErrorMessage: '', StatusCode: 200 };

  exchangeRateService: ExchangerateService = inject(ExchangerateService);
  exchangeRate: ExchangeRate | undefined;
  form = this.fb.group(
    {
      baseCurrencyCode: [this.baseCurrency, Validators.required],
      targetCurrencyCode: [this.targetCurrency, Validators.required],
      rate: [1],
    }
  );

  saveCurrency() {
    this.baseCurrency = this.form.get('baseCurrencyCode')?.value;
    this.targetCurrency = this.form.get('targetCurrencyCode')?.value;
  }


  ngOnInit(): void {
    this.form.get('baseCurrencyCode')?.valueChanges.subscribe(
      (newBaseCurrency) => {
        const targetCurrencyControl = this.form.get('targetCurrencyCode');
        if (newBaseCurrency === this.targetCurrency && targetCurrencyControl?.value === this.targetCurrency) {
          targetCurrencyControl?.setValue(this.baseCurrency);
        };
        let selectElement = document.querySelectorAll('select') as NodeListOf<HTMLSelectElement>;
        selectElement[0]?.blur();
      }
    );

    this.form.get('targetCurrencyCode')?.valueChanges.subscribe(
      (newTargetCurrency) => {
        const baseCurrencyControl = this.form.get('baseCurrencyCode');
        if (newTargetCurrency === this.baseCurrency && baseCurrencyControl?.value === this.baseCurrency) {
          baseCurrencyControl?.setValue(this.targetCurrency);
        };
        let selectElement = document.querySelectorAll('select') as NodeListOf<HTMLSelectElement>;
        selectElement[1]?.blur();
      }
    );
  }

  onSubmit() {
    console.log(this.form.value)
    this.form.markAllAsTouched
    this.form.updateValueAndValidity

    let baseCurrencyCode = this.form.value.baseCurrencyCode as string;
    let targetCurrencyCode = this.form.value.targetCurrencyCode as string;
    let rate = this.form.value.rate as number;

    let exchangeRate = {
      baseCurrencyCode,
      targetCurrencyCode,
      rate
    }

    this.exchangeRateService.addRate(exchangeRate).subscribe((data) => {
      this.exchangeRate = data;
      this.exception.ErrorMessage = 'Валюта успешно добавлена!';
      this.exception.StatusCode = 200;
    },
      (error) => {
        this.exception.ErrorMessage = 'Error: ' + error.error.ErrorMessage;
        this.exception.StatusCode = error.error.StatusCode;
      })
  }
}


