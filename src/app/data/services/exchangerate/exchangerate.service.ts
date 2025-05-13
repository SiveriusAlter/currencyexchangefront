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
  exchangeRateAPIUrl = `${this.baseAPIUrl}ExchangeRate`
  constructor() { }
  getRate() {
    return this.http.get<ExchangeResult[]>(`${this.exchangeRateAPIUrl}`)
  }

  findRage(searchString: string) {
    return this.http.get<ExchangeRate[]>(`${this.exchangeRateAPIUrl}/${searchString}`)
  }

  addRate(body: { baseCurrencyCode: string, targetCurrencyCode: string, rate: number }) {
    return this.http.post<ExchangeRate>(`${this.exchangeRateAPIUrl}`, body);
  }

  updateRate(baseCurrencyCode: string, targetCurrencyCode: string, body: { rate: number }) {
    return this.http.patch<ExchangeRate>(`${this.exchangeRateAPIUrl}/${baseCurrencyCode}&${targetCurrencyCode}`, body)
  }
}
