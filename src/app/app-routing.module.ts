import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { ExpenseComponent } from './expense/expense.component';

const routes: Routes = [
  { path: '',pathMatch:"full",redirectTo:'home'},
  { path: 'home',component:HomeComponent},
  { path: 'todos',component:TodosComponent},
  { path: 'expense',component:ExpenseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
