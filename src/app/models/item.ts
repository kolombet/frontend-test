export class Item {
    id: number;
    title: string;
    parentId: number;
    children:Item[] = [];

    clone() {
        const item = new Item();
        item.id = this.id;
        item.title = this.title;
        item.parentId = this.parentId;
        return item;
    }
}