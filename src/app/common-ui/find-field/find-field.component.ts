import { Component, inject, output } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FindService } from '../../data/services/find/find.service';

@Component({
  selector: 'app-find-field',
  imports: [SvgComponent, ReactiveFormsModule],
  templateUrl: './find-field.component.html',
  styleUrl: './find-field.component.scss'
})
export class FindFieldComponent {
  constructor(private readonly findService: FindService) { }

  loupe = "loupe";

  fb = inject(FormBuilder);

  form = this.fb.group(
    {
      findString: ''
    }
  )

  onSubmit() {
    this.findService.GetFindString(this.form.value.findString as string);
  }


}
