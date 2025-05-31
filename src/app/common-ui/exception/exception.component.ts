import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Errors } from '../../data/interfaces/errors';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-exception',
  imports: [NgClass],
  templateUrl: './exception.component.html',
  styleUrl: './exception.component.scss'
})
export class ExceptionComponent implements OnChanges {

  @Input() exception: string = '';
  @Input() statusCode: number = 200;

  isException: boolean = false;
  isSuccess: boolean = true;


  ngOnChanges(changes: SimpleChanges): void {
    if (this.statusCode == 200) {
      this.isSuccess = true;
      this.isException = false;
    }
    else {
      this.isException = true;
      this.isSuccess = false;
    }
  }
}
