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
    console.log(this.form.value)
    this.form.markAllAsTouched
    this.form.updateValueAndValidity
    //@ts-ignore
    this.currencyService.addCurrency(this.form.value).subscribe(val => this.currencyResult = val)
  }
}
