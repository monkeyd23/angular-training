import { Routes, RouterModule } from'@angular/router';
import { BuildsComponent } from './builds/builds.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { BuildDetailComponent } from './builds/build-detail/build-detail.component';
import { BuildStartComponent } from './builds/build-start/build-start.component';
import { BuildEditComponent } from './builds/build-edit/build-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/builds', pathMatch: 'full'},
    {path: 'builds', component: BuildsComponent, children: [
        {path: '', component: BuildStartComponent},
        {path: 'new', component: BuildEditComponent},
        {path: ':id', component: BuildDetailComponent},
        {path: ':id/edit', component: BuildEditComponent}

    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}