import { Component, OnInit } from '@angular/core';
import { Build } from './build.model';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent implements OnInit {

  selectedBuild: Build;

  constructor() { }

  ngOnInit() {
  }

  onSelect(build:Build) {
    this.selectedBuild = build;
  }

}
