import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookEditComponent } from './components/book/book-edit/book-edit.component';
// import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
// import { MasterComponent } from './layouts/view/master/master.component';


const routes: Routes = [
  {
    path: 'books',
    component :BookListComponent,
  },
  {
    path: 'books/create',
    component: BookCreateComponent
  },
  {
    path : 'books/:id/edit',
    component : BookEditComponent
  },
  {
    path: 'books/:id/detail',
    component: BookDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
