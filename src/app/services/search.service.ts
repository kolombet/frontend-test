import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly url: string = 'http://localhost:3000/items';
  private itemsCache: Item[];

  constructor(private http: HttpClient) { }

  public async getItems(): Promise<object> {
    return await this.http.get(this.url).toPromise();
  }

  public async getParsedItems(): Promise<Item[]> {
    const rawItems = await this.getItems();
    if (!Array.isArray(rawItems)) {
      return;
    }
    const items = [];
    for (const raw of rawItems) {
      const item = new Item();
      item.id = raw.id;
      item.parentId = raw.parent_id;
      item.title = raw.title;
      Object.freeze(item);
      Object.freeze(item.children);
      items.push(item);
    }
    Object.freeze(items);
    return items;
  }

  public async getSearchResults(query: string = null): Promise<Item[]> {
    if (!this.itemsCache) {
      this.itemsCache = await this.getParsedItems();
    }

    const itemsById: Map<number, Item> = new Map();
    const filtered = [];
    for (const item of this.itemsCache) {
      if (!query || item.title.toLowerCase().indexOf(query.trim().toLowerCase()) !== -1) {
        const clone = item.clone();
        itemsById.set(clone.id, clone);
        filtered.push(clone);
      }
    }

    const itemTree = [];
    for (const item of filtered) {
      if (item.parentId) {
        const parent = itemsById.get(item.parentId);
        if (parent) {
          parent.children.push(item);
          continue;
        }
      }
      itemTree.push(item);
    }
    return itemTree;
  }
}
