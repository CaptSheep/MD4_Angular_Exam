import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: "app-book-create",
  templateUrl: "./book-create.component.html",
  styleUrls: ["./book-create.component.css"],
})
export class BookCreateComponent implements OnInit {
  createBookForm: FormGroup;
  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.createBookForm = this.fb.group({
      id: ["", Validators.required],
      title: ["", Validators.required],
      author: ["", Validators.required],
      description: ["", Validators.required],
    });
  }
  createBook(){
     this.bookService.create(this.createBookForm.value).subscribe(() => {
         this.router.navigate(['books']);
         alert("Create Success");
       });
  }
}
