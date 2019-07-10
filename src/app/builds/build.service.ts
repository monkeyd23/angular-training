import { Injectable, EventEmitter } from '@angular/core';
import { Build } from './build.model';
import { Part } from '../shared/part.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class BuildService {

    buildSelected = new EventEmitter<Build>();

    private builds: Build[] = [
        new Build('Build 1', 'Description 1', 'https://simsvip.com/wp-content/uploads/2017/08/DGyQZ2fUQAAtQXy.jpg',
        [new Part('RAM', 120), new Part('VRAM', 100)]),
        new Build('Build 2', 'Description 2', 'https://simsvip.com/wp-content/uploads/2017/08/DGyQZ2fUQAAtQXy.jpg',
        [new Part('RAM', 200), new Part('VRAM', 220)]), 
      ];

      constructor(private slService:ShoppingListService){}

      getBuilds() {
          return this.builds.slice();
      }

      addPartsToShoppingList(parts:Part[]) {
        this.slService.addParts(parts);
      }




}