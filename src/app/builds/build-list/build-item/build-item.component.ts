import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Build } from '../../build.model';

@Component({
  selector: 'app-build-item',
  templateUrl: './build-item.component.html',
  styleUrls: ['./build-item.component.css']
})
export class BuildItemComponent implements OnInit {

  @Input() build: Build;
  @Output() itemSelected = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.itemSelected.emit();
  }

}
