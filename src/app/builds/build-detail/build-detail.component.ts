import { Component, OnInit, Input } from '@angular/core';
import { Build } from '../build.model';
import { BuildService } from '../build.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-build-detail',
  templateUrl: './build-detail.component.html',
  styleUrls: ['./build-detail.component.css']
})
export class BuildDetailComponent implements OnInit {

  build: Build;
  id: number;

  constructor(private buildService:BuildService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.build = this.buildService.getBuild(this.id);
      }
    );
  }

  addToShoppingList() {
    this.buildService.addPartsToShoppingList(this.build.parts);
  }

  editBuild() {
    this.router.navigate(['edit'], {
      relativeTo: this.route
    })
  }

}
