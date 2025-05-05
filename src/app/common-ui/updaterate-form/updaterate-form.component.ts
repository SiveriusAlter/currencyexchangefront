import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Currency } from '../../data/interfaces/currency.interface';
import { ExchangerateService } from '../../data/services/exchangerate/exchangerate.service';
import { ExchangeRate } from '../../data/interfaces/exchangerate.interface';

@Component({
  selector: 'app-updaterate-form',
  imports: [ReactiveFormsModule],
  templateUrl: './updaterate-form.component.html',
  styleUrl: './updaterate-form.component.scss'
})
export class UpdaterateFormComponent {
  fb = inject(FormBuilder);
  @Input() exchangeRates!: ExchangeRate[];

  exchangeRateService: ExchangerateService = inject(ExchangerateService);
  exchangeRate: ExchangeRate | undefined;
  form = this.fb.group(
    {
      exchangeRate: ['', Validators.required],
      rate: [1],
    }
  );

  onSubmit() {
    console.log(this.form.value);
    const exchangeRateValue = this.form.get('exchangeRate')?.value;
    if (!exchangeRateValue) {
      console.error('No exchange rate selected!');
      return;
    }

    const [baseCurrencyCode, targetCurrencyCode] = exchangeRateValue?.split('&');
    const body = {
      rate: this.form.get('rate')?.value
    };
    this.form.markAllAsTouched;
    this.form.updateValueAndValidity;
    // @ts-ignore
    this.exchangeRateService.updateRate(baseCurrencyCode, targetCurrencyCode, body).subscribe(val => this.exchangeRate = val);
  }
}
