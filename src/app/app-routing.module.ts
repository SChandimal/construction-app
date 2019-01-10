import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DailyMaterialUsageComponent} from './daily-material-usage/daily-material-usage.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'homePage',
    component: HomePageComponent
  },
  {
    path: 'dailyMaterial',
    component: DailyMaterialUsageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
