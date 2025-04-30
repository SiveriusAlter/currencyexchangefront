import { Component, inject, Input } from '@angular/core';
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
  fb = inject(FormBuilder);
  @Input() currencies!: Currency[];

  exchangeService: ExchangeService = inject(ExchangeService);
  exchangeResult: ExchangeResult | undefined
  form = this.fb.group(
    {
      baseCurrency: [1, Validators.required],
      targetCurrency: [1, Validators.required],
      amount: [0],
    }
  );

  onSubmit() {
    console.log(this.form.value)
    this.form.markAllAsTouched
    this.form.updateValueAndValidity
    // @ts-ignore
    this.exchangeService.getAmount(this.form.value).subscribe(val => this.exchangeResult = val)
  }

}
