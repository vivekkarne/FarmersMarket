import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
	{ path: '', component: HomeComponentComponent },
	{ path: '**', component: HomeComponentComponent },
];
=======

const routes: Routes = [];
>>>>>>> 5075e85e221941deaab37ddf52758776d4d7370b

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule {
 }
=======
export class AppRoutingModule { }
>>>>>>> 5075e85e221941deaab37ddf52758776d4d7370b
