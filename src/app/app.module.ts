import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/header/header.component';
import { FormsComponent } from './Components/forms/forms.component';
import { ItemsComponent } from './Components/items/items.component';
import { TodolistComponent } from './Pages/todolist/todolist.component';
import { CompletedComponent } from './Pages/completed/completed.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormsComponent,
    ItemsComponent,
    TodolistComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
