import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() public item: Item;

  constructor() { }

  ngOnInit() {
  }
}
