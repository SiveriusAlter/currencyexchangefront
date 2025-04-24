import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { VerticalSeparatorComponent } from "../vertical-separator/vertical-separator.component";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SideBarComponent, VerticalSeparatorComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
