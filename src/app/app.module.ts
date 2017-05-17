import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HomeComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
