import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ExchangerateCardComponent } from "../../common-ui/exchangerate-card/exchangerate-card.component";
import { ExchangeRate } from '../../data/interfaces/exchangerate.interface';
import { ExchangerateService } from '../../data/services/exchangerate/exchangerate.service';
import { JsonPipe } from '@angular/common';
import { FindFieldComponent } from "../../common-ui/find-field/find-field.component";
import { FindService } from '../../data/services/find/find.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rate-page',
  imports: [ExchangerateCardComponent, FindFieldComponent],
  templateUrl: './rate-page.component.html',
  styleUrl: './rate-page.component.scss'
})
export class RatePageComponent implements OnInit, OnDestroy {
  exchangeservice = inject(ExchangerateService);
  exchangerate: ExchangeRate[] = [];
  firsttenrate = this.exchangerate.slice(0, 8);
  anotherrate = this.exchangerate.slice(9);
  exr: ExchangeRate = this.exchangerate[0];
  placeholder: string = "Find exchange rate..."

  private subs: Subscription = new Subscription;

  constructor(private readonly findService: FindService) {
    this.exchangeservice.getRate()
      .subscribe(val => {
        this.firsttenrate = val.slice(0, 8);
        this.anotherrate = val.slice(9)
      })
  }


  ngOnInit(): void {
    this.subs = this.findService.findString$.subscribe((findString) => this.GetFindResult(findString));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


  private GetFindResult(findString: string): void {
    this.exchangeservice.findRage(findString).subscribe((find) => this.firsttenrate = find);
    this.anotherrate = [];
  }
}
