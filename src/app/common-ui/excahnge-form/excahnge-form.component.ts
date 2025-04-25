import { Component, Input } from '@angular/core';
import { Currency } from '../../data/interfaces/currency.interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-excahnge-form',
  imports: [ReactiveFormsModule],
  templateUrl: './excahnge-form.component.html',
  styleUrl: './excahnge-form.component.scss'
})
export class ExcahngeFormComponent {

  @Input() baseCurrency!: Currency[];
  @Input() targetCurrency!: Currency[];

  form: FormGroup = new FormGroup({
    baseCurrency: new FormControl(1),
    targetCurrency: new FormControl(1),
    amountExchange: new FormControl(0)
  }
  );


  onSubmit() {
    console.log(this.form.value)
  }
}
