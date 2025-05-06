import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../app.config';
import { ExchangeResult } from '../../interfaces/exchangeresult';
import { ExchangeRate } from '../../interfaces/exchangerate.interface';

@Injectable({
  providedIn: 'root'
})
export class ExchangerateService {
  http: HttpClient = inject(HttpClient)

  baseAPIUrl = environment.apiUrl;
  constructor() { }
  getRate() {
    return this.http.get<ExchangeResult[]>(`${this.baseAPIUrl}ExchangeRate`)
  }

  addRate(body: { baseCurrencyCode: string, targetCurrencyCode: string, rate: number }) {
    return this.http.post<ExchangeRate>(`${this.baseAPIUrl}ExchangeRate`, body);
  }

  updateRate(baseCurrencyCode: string, targetCurrencyCode: string, body: { rate: number} ) {
    return this.http.patch<ExchangeRate>(`${this.baseAPIUrl}ExchangeRate/${baseCurrencyCode}&${targetCurrencyCode}`, body)
  }
}
