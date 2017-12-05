import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

    items: Item[];

    constructor( private ItemService: ItemService ) 
    { 

    }

    ngOnInit() 
    {
        this.ItemService.getItems().subscribe( items => {
            this.items = items;
        });
    }

}
