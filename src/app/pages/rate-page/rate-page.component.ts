import { Component, inject } from '@angular/core';
import { ExchangerateCardComponent } from "../../common-ui/exchangerate-card/exchangerate-card.component";
import { ExchangeRate } from '../../data/interfaces/exchangerate.interface';
import { ExchangerateService } from '../../data/services/exchangerate/exchangerate.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-rate-page',
  imports: [ExchangerateCardComponent, JsonPipe],
  templateUrl: './rate-page.component.html',
  styleUrl: './rate-page.component.scss'
})
export class RatePageComponent {
  exchangeservice =  inject(ExchangerateService)
  exchangerate: ExchangeRate[] = []
  exr: ExchangeRate = this.exchangerate[0]
  constructor() {
    this.exchangeservice.getRate()
    .subscribe(val => {
      this.exchangerate = val;
    })
  }
}
