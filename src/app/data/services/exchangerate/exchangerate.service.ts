import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../app.config';
import { ExchangeRate } from '../../interfaces/exchangerate.interface';

@Injectable({
  providedIn: 'root'
})
export class ExchangerateService {
  http: HttpClient = inject(HttpClient)

  baseAPIUrl = environment.apiUrl;
  constructor() {}
    getRate() {
      return this.http.get<ExchangeRate[]>(`${this.baseAPIUrl}ExchangeRate`)
    }
}
