import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Part } from 'src/app/shared/part.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static:false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static:false}) amountInputRef: ElementRef;
 @Output() partAdded = new EventEmitter<Part>();

  constructor() { }

  ngOnInit() {
  }

  onAddPart(event) {
    event.preventDefault();

    const partName = this.nameInputRef.nativeElement.value;
    const partAmount = this.amountInputRef.nativeElement.value;
    const part = new Part(partName, partAmount);
    this.partAdded.emit(part);
  }



}
