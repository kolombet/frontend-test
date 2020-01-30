import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  items: Item[];

  constructor(private searchService: SearchService) {}

  async onSearch(query: string) {
    this.items = await this.searchService.getSearchResults(query);
  }

  async ngOnInit() {
    this.items = await this.searchService.getSearchResults();
  }

}
