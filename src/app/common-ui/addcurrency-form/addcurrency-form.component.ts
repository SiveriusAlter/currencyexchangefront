import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Currency } from '../../data/interfaces/currency.interface';

@Component({
  selector: 'app-addcurrency-form',
  imports: [ReactiveFormsModule],
  templateUrl: './addcurrency-form.component.html',
  styleUrl: './addcurrency-form.component.scss'
})
export class AddcurrencyFormComponent {
  fb = inject(FormBuilder);
  @Input() currency!: Currency;

  //exchangeService: ExchangeService = inject(ExchangeService);
  //exchangeResult: ExchangeResult | undefined
  form = this.fb.group(
    {
      code: ['', Validators.required],
      fullName: ['', Validators.required],
      sign: [''],
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
