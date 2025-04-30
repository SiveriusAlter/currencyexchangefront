import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Currency } from '../../interfaces/currency.interface';
import { environment } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  http: HttpClient = inject(HttpClient)

  baseAPIUrl = environment.apiUrl;
  constructor() {}
    getCurrency() {
      return this.http.get<Currency[]>(`${this.baseAPIUrl}Currency`)
    }

    addCurrency(body: {name: string, code: string, sign:string}) {
      return this.http.post<Currency>(`${this.baseAPIUrl}Currency`, body);
    }
}
