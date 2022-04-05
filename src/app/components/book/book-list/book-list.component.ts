import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
books = [];
  constructor(
    private bookService : BookService,
     private router: Router
  ) { }

  ngOnInit() {
    this.getAllBook();
  }
getAllBook(){
  this.bookService.getAll().subscribe((res)=>{
    this.books = res;
  });
}
deleteBook(id){
  if (confirm("Are you sure ?")) {
    this.bookService.delete(id).subscribe(() => {
      alert("Delete Success");
      this.router.navigate(["books"]);
    });
  } else {
    this.getAllBook();
  }
}
}
