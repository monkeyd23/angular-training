import { Component, OnInit } from '@angular/core';
import { Part } from '../shared/part.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  parts: Part[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.parts = this.slService.getParts();
    this.slService.partsChanged
      .subscribe((parts:Part[]) => this.parts = parts)
  }
  
}
