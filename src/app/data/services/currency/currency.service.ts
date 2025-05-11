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

  errorMessage: string = '';

  baseAPIUrl = environment.apiUrl;
  constructor() { }
  getCurrency() {
    return this.http.get<Currency[]>(`${this.baseAPIUrl}Currency`)
  }

  addCurrency(body: { code: string, fullName: string, sign: string }) {
    return this.http.post<Currency>(`${this.baseAPIUrl}Currency`, body)
    .pipe(catchError((err) => {
      this.errorMessage = err.message;
      console.log(this.errorMessage);
      return [];
    }));
  }
}
