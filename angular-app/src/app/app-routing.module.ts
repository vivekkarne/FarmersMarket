import { SwipeComponent } from './swipe/swipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MycartComponent } from './mycart/mycart.component';
import { SuccessPayComponent } from './success-pay/success-pay.component';
import { ResultCardsComponent } from './result-cards/result-cards.component';

const routes: Routes = [
	{ path: '', component: HomeComponentComponent },
  {path: 'swipe', component: SwipeComponent},
  {path: 'mycart', component: MycartComponent},
  {path: 'successPay', component: SuccessPayComponent},
  {path: 'results', component: ResultCardsComponent},
  { path: '**', component: HomeComponentComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule {
 }
