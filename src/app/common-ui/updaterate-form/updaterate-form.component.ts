import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExchangerateService } from '../../data/services/exchangerate/exchangerate.service';
import { ExchangeRate } from '../../data/interfaces/exchangerate.interface';
import { ExceptionComponent } from "../exception/exception.component";
import { Errors } from '../../data/interfaces/errors';

@Component({
  selector: 'app-updaterate-form',
  imports: [ReactiveFormsModule, ExceptionComponent],
  templateUrl: './updaterate-form.component.html',
  styleUrl: './updaterate-form.component.scss'
})
export class UpdaterateFormComponent {
  fb = inject(FormBuilder);
  @Input() exchangeRates!: ExchangeRate[];

  exchangeRateService: ExchangerateService = inject(ExchangerateService);
  exchangeRate: ExchangeRate | undefined;
  exception: Errors = { ErrorMessage: '', StatusCode: 200 };
  form = this.fb.group(
    {
      exchangeRate: ['RUB&USD', Validators.required],
      rate: [1],
    }
  );

  onSubmit() {
    const exchangeRateValue = this.form.get('exchangeRate')?.value;
    if (!exchangeRateValue) {
      console.error('No exchange rate selected!');
      return;
    }

    const [baseCurrencyCode, targetCurrencyCode] = exchangeRateValue?.split('&');
    const body = {
      rate: this.form.get('rate')?.value as number
    };
    this.form.markAllAsTouched;
    this.form.updateValueAndValidity;
    this.exchangeRateService.updateRate(baseCurrencyCode, targetCurrencyCode, body).subscribe((val) => { 
      this.exchangeRate = val; 
      this.exception.ErrorMessage = 'Обменный курс успешно обновлен!';
      this.exception.StatusCode = 200;
    },
      (error) => {
        this.exception.ErrorMessage = 'Error: ' + error.error.ErrorMessage;
        this.exception.StatusCode = error.error.StatusCode;
      });
  }
}
