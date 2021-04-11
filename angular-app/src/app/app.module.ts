import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ImageUploadComponentComponent } from './image-upload-component/image-upload-component.component';
import { ResultCardsComponent } from './result-cards/result-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ImageUploadComponentComponent,
    ResultCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
