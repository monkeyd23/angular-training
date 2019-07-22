import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Build } from '../../build.model';
import { BuildService } from '../../build.service';

@Component({
  selector: 'app-build-item',
  templateUrl: './build-item.component.html',
  styleUrls: ['./build-item.component.css']
})
export class BuildItemComponent implements OnInit {

  @Input() build: Build;
  @Input() index: number;
  
  ngOnInit() {
  }

}
