import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Currency } from '../../interfaces/currency.interface';
import { environment } from '../../../app.config';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  http: HttpClient = inject(HttpClient)

  error: Error = new Error;

  baseAPIUrl = environment.apiUrl;
  currencyAPIurl = `${this.baseAPIUrl}Currency`;
  constructor() { }
  getCurrency() {
    return this.http.get<Currency[]>(`${this.currencyAPIurl}`);
  }

  findCurrency(searchString: string) {
    return this.http.get<Currency[]>(`${this.currencyAPIurl}/${searchString}`);
  }

  addCurrency(body: { code: string, fullName: string, sign: string }) {
    return this.http.post<Currency>(`${this.currencyAPIurl}`, body);
  }
}
