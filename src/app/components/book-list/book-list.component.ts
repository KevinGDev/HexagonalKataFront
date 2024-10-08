import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/ApiService';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  constructor(private apiService: ApiService) {
  }

  bookList: any;
  ngOnInit(): void {
    this.apiService.getBooks().subscribe((result) => this.bookList = result);
  }



}
