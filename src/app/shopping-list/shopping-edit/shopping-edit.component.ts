import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Part } from 'src/app/shared/part.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static:false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static:false}) amountInputRef: ElementRef;

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddPart(event) {
    event.preventDefault();
    const partName = this.nameInputRef.nativeElement.value;
    const partAmount = this.amountInputRef.nativeElement.value;
    const part = new Part(partName, partAmount);
    this.slService.addPart(part);
  }



}
