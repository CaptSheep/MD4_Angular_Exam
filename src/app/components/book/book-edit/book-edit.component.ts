import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: "app-book-edit",
  templateUrl: "./book-edit.component.html",
  styleUrls: ["./book-edit.component.css"],
})
export class BookEditComponent implements OnInit {
  editBookForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.bookService.getById(id).subscribe((book) => {
      this.editBookForm = this.fb.group({
        id: [book.id],
        title: [book.title],
        author: [book.author],
        description: [book.description],
      });
    });
  }
  editBook() {
    const data = this.editBookForm.value;
    this.bookService.edit(data.id, data).subscribe(() => {
      alert("Update Success");
      this.router.navigate(["books"]);
    });
  }
}
