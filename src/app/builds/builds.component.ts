import { Component, OnInit } from '@angular/core';
import { Build } from './build.model';
import { BuildService } from './build.service';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css'],
  providers: [BuildService]
})
export class BuildsComponent implements OnInit {

  selectedBuild: Build;

  constructor(private buildService:BuildService) { }

  ngOnInit() {
    this.buildService.buildSelected
    .subscribe((build:Build) => this.selectedBuild = build)
  }

  onSelect(build:Build) {
    this.selectedBuild = build;
  }

}
