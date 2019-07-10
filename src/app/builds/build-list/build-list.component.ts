import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Build } from '../build.model';
import { BuildService } from '../build.service';

@Component({
  selector: 'app-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: ['./build-list.component.css']
})
export class BuildListComponent implements OnInit {

  builds:Build[];
  
  constructor(private buildService:BuildService) { }

  ngOnInit() {
    this.builds = this.buildService.getBuilds();
  }

}
