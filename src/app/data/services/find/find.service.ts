import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindService {

  constructor() { }

  private findString = new Subject<string>();

  public findString$ = this.findString.asObservable();

  public GetFindString(findString: string) {
    this.findString.next(findString);
  }
}
