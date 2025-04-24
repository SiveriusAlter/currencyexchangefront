import { Component } from '@angular/core';
import { SvgComponent } from "../svg/svg.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [SvgComponent, RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  menuItems = [
    {
      label: 'Home',
      icon: 'home',
      link: 'home'
    },
    {
      label: 'Exchange rate',
      icon: 'exchange-rate',
      link: 'rate'
    },
    {
      label: 'Exchange',
      icon: 'exchange',
      link: 'exchange'
    },
    {
      label: 'Settings',
      icon: 'settings',
      link: 'settings'
    }
  ]
}
