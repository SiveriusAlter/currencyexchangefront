import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Currency } from '../../data/interfaces/currency.interface';

@Component({
  selector: 'app-addrate-form',
  imports: [ReactiveFormsModule],
  templateUrl: './addrate-form.component.html',
  styleUrl: './addrate-form.component.scss'
})
export class AddrateFormComponent {
  fb = inject(FormBuilder);
  @Input() currencies: Currency[] = [];

  //exchangeService: ExchangeService = inject(ExchangeService);
  //exchangeResult: ExchangeResult | undefined
  form = this.fb.group(
    {
      baseCurrency: ['', Validators.required],
      targetCurrency: ['', Validators.required],
      rate: [''],
    }
  );

  onSubmit() {
    console.log(this.form.value)
    //this.form.markAllAsTouched
    //this.form.updateValueAndValidity
    // @ts-ignore
    // this.exchangeService.getAmount(this.form.value).subscribe(val => this.exchangeResult = val)
  }
}


