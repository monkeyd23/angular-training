import { Component, OnInit, Input } from '@angular/core';
import { Build } from '../build.model';

@Component({
  selector: 'app-build-detail',
  templateUrl: './build-detail.component.html',
  styleUrls: ['./build-detail.component.css']
})
export class BuildDetailComponent implements OnInit {

  @Input() build: Build;

  constructor() { }

  ngOnInit() {
  }

}
