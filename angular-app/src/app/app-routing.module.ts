import { SwipeComponent } from './swipe/swipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
	{ path: '', component: HomeComponentComponent },
	// { path: '**', component: HomeComponentComponent },
  {path: 'swipe', component: SwipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule {
 }
