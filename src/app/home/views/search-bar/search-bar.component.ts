import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  query: string;
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearchChange(value: string) {
    this.search.emit(value);
  }

  submitSearch() {
    this.search.emit(this.query);
  }
}
