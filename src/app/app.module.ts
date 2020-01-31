import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BeerService } from './services/beer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavComponent } from './components/fav/fav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
