import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Build } from '../build.model';

@Component({
  selector: 'app-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: ['./build-list.component.css']
})
export class BuildListComponent implements OnInit {

  @Output() buildSelected = new EventEmitter<Build>();

  builds: Build[] = [
    new Build('Build 1', 'Description 1', 'https://simsvip.com/wp-content/uploads/2017/08/DGyQZ2fUQAAtQXy.jpg'),
    new Build('Build 2', 'Description 2', 'https://simsvip.com/wp-content/uploads/2017/08/DGyQZ2fUQAAtQXy.jpg'), 
  ];
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(build: Build) {
    this.buildSelected.emit(build);
  }

}
