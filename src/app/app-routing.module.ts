import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { BooksListComponent } from './components/books-list/books-list.component';

const routes: Routes = [
  {path: '', component: CategoryComponent},
  {path: 'categories', component: CategoryComponent},
  {path: 'books/:category', component: BooksListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
