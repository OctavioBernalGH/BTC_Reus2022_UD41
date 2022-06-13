import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CharactercardComponent } from './charactercard/charactercard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DetailsComponent } from './details/details.component';
import { AddCharComponent } from './components/add-char/add-char.component';
import { CharDetailsComponent } from './components/char-details/char-details.component';
import { CharListComponent } from './components/char-list/char-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      CharactercardComponent,
      AboutusComponent,
      DetailsComponent,
      AddCharComponent,
      CharDetailsComponent,
      CharListComponent
   ],
   imports: [
	 BrowserModule,
	 AppRoutingModule,
	 HttpClientModule,
   FormsModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
