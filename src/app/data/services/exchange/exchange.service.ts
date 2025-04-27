import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../app.config';
import { ExchangeResult } from '../../interfaces/exchangeresult';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  http: HttpClient = inject(HttpClient)

  baseAPIUrl = "http://localhost:5150/Exchange/";
  constructor() { }

  getAmount(test: {baseCurrency: number, targetCurrency: number, amount: number, convertAmount: number}) {
    return this.http.get<ExchangeResult>(`${this.baseAPIUrl}from=${test.baseCurrency}&to=${test.targetCurrency}&amount=${test.amount}`)
  }


}
