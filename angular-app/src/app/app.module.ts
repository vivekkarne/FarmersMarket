import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
<<<<<<< HEAD
import { ImageUploadComponentComponent } from './image-upload-component/image-upload-component.component';
=======
>>>>>>> 5075e85e221941deaab37ddf52758776d4d7370b

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponentComponent,
    ImageUploadComponentComponent
=======
    HomeComponentComponent
>>>>>>> 5075e85e221941deaab37ddf52758776d4d7370b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
