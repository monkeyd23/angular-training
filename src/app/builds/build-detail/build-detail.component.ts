import { Component, OnInit, Input } from '@angular/core';
import { Build } from '../build.model';
import { BuildService } from '../build.service';

@Component({
  selector: 'app-build-detail',
  templateUrl: './build-detail.component.html',
  styleUrls: ['./build-detail.component.css']
})
export class BuildDetailComponent implements OnInit {

  @Input() build: Build;

  constructor(private buildService:BuildService) { }

  ngOnInit() {
  }

  addToShoppingList() {
    this.buildService.addPartsToShoppingList(this.build.parts);
  }

}
