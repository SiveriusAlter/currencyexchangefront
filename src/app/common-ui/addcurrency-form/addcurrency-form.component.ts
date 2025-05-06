import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Currency } from '../../data/interfaces/currency.interface';
import { CurrencyService } from '../../data/services/currency/currency.service';

@Component({
  selector: 'app-addcurrency-form',
  imports: [ReactiveFormsModule],
  templateUrl: './addcurrency-form.component.html',
  styleUrl: './addcurrency-form.component.scss'
})
export class AddcurrencyFormComponent {
  fb = inject(FormBuilder);
  @Input() currency!: Currency;

  currencyService: CurrencyService = inject(CurrencyService);
  currencyResult: Currency | undefined
  form = this.fb.group(
    {
      code: ['', Validators.required],
      fullName: ['', Validators.required],
      sign: [''],
    }
  );

  onSubmit() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();

    let code = this.form.value.code as string;
    let fullName = this.form.value.fullName as string;
    let sign = this.form.value.sign as string;

    let currency = {
      code,
      fullName,
      sign
    }
    console.log(this.form.value)
    this.currencyService.addCurrency(currency).subscribe(val => this.currencyResult = val);
  }
}
