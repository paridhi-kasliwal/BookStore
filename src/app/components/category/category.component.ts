import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  topicArray = [
    {id: 1, name: 'Fiction', img_src: '../../../assets/images/Fiction.svg'},
    {id: 2, name: 'Philosophy', img_src: '../../../assets/images/Philosophy.svg'},
    {id: 3, name: 'Drama', img_src: '../../../assets/images/Drama.svg'},
    {id: 4, name: 'History', img_src: '../../../assets/images/History.svg'},
    {id: 5, name: 'Humour', img_src: '../../../assets/images/Humour.svg'},
    {id: 6, name: 'Adventure', img_src: '../../../assets/images/Adventure.svg'},
    {id: 7, name: 'Politics', img_src: '../../../assets/images/Politics.svg'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  goToBookList(topic) {
    this.router.navigate(['books', topic]);
  }
}
