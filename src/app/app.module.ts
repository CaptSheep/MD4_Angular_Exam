import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookEditComponent } from './components/book/book-edit/book-edit.component';
import { BookCreateComponent } from './components/book/book-create/book-create.component';
import { MasterComponent } from './layouts/view/master/master.component';
import { HeaderComponent } from './layouts/view/header/header.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
// 
@NgModule({
  declarations: [AppComponent, 
    BookListComponent, 
    BookEditComponent, 
    BookCreateComponent, 
    MasterComponent, 
    HeaderComponent, BookDetailComponent,],
  imports: [
    BrowserModule,
     AppRoutingModule, 
     HttpClientModule,
     ReactiveFormsModule,
     FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
