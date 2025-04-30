import { Routes } from '@angular/router';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { ExchangesPageComponent } from './pages/exchanges-page/exchanges-page.component';
import { CurreciesPageComponent } from './pages/currecies-page/currecies-page.component';
import { RatePageComponent } from './pages/rate-page/rate-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            { path: 'home', title: 'CurrenciesPage', component: CurreciesPageComponent },
            { path: 'exchange', title: 'ExchangesPage', component: ExchangesPageComponent },
            { path: 'rate', title: 'RatePagee', component: RatePageComponent },
            { path: 'settings', title: 'SettingsPage', component: SettingsPageComponent }
        ]
    }
];
