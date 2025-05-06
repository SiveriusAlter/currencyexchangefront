import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExchangeRate } from '../../data/interfaces/exchangerate.interface';
import { ExchangerateService } from '../../data/services/exchangerate/exchangerate.service';
import { Currency } from '../../data/interfaces/currency.interface';

@Component({
  selector: 'app-addrate-form',
  imports: [ReactiveFormsModule],
  templateUrl: './addrate-form.component.html',
  styleUrl: './addrate-form.component.scss'
})
export class AddrateFormComponent {
  fb = inject(FormBuilder);
  @Input() currencies!: Currency[];

  exchangeRateService: ExchangerateService = inject(ExchangerateService);
  exchangeRate: ExchangeRate | undefined;
  form = this.fb.group(
    {
      baseCurrencyCode: ['RUB', Validators.required],
      targetCurrencyCode: ['RUB', Validators.required],
      rate: [1],
    }
  );

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

    this.exchangeRateService.addRate(exchangeRate).subscribe(val => this.exchangeRate = val)
  }
}


