import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  bookList = [];
  selectedCategory: any;
  search: any = '';
  page: number = 1;
  recordCount: number;
  maxDataPerPage = 32;
  maxPage: number = 1;

  constructor(private bookservice: BookService, private route: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedCategory = params['category'];
    });   
    this.getBookListByTopic();
  }

  getBookListByTopic() {
    if (this.page <= this.maxPage) {
      this.spinner.show();
      if (this.page === 1) {
        this.bookList = [];
      }

      let queryData = {
        page: this.page,
        topic: this.selectedCategory,
        search: this.search,
        mime_type: 'image'
      };

      this.bookservice.getBookListByTopic(queryData).subscribe((data) => {
        this.recordCount = data['count'];
        this.maxPage = Math.ceil(this.recordCount / this.maxDataPerPage);
        this.bookList = this.bookList.concat(data['results']);
        this.page++;

        this.spinner.hide();
      });
    }
  }

  onSearch(event) {
    if (event.keyCode === 13) {
      this.bookList = [];
      this.page = 1;
      this.getBookListByTopic();
    }
  }

  clearSearch() {
    this.search = '';
    this.page = 1;
    this.bookList = [];
    this.getBookListByTopic();
  }

  goToCategoryPage() {
    this.bookList = [];
    this.router.navigate(['categories']);
  }

  onBookListScroll() {
    this.getBookListByTopic();
  }
}
