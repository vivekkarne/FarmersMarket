import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ImageUploadComponentComponent } from './image-upload-component/image-upload-component.component';
import { SwipeComponent } from './swipe/swipe.component';
import { FormsModule } from '@angular/forms';
import { ResultCardsComponent } from './result-cards/result-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { MycartComponent } from './mycart/mycart.component';
import { SuccessPayComponent } from './success-pay/success-pay.component';
import { HomepageSwipeComponent } from './homepage-swipe/homepage-swipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ImageUploadComponentComponent,
    SwipeComponent,
    ResultCardsComponent,
    MycartComponent,
    SuccessPayComponent,
    HomepageSwipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
