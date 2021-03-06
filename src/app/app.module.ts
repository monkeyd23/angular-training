import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuildsComponent } from './builds/builds.component';
import { BuildListComponent } from './builds/build-list/build-list.component';
import { BuildDetailComponent } from './builds/build-detail/build-detail.component';
import { BuildItemComponent } from './builds/build-list/build-item/build-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { BuildStartComponent } from './builds/build-start/build-start.component';
import { BuildEditComponent } from './builds/build-edit/build-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildsComponent,
    BuildListComponent,
    BuildDetailComponent,
    BuildItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    DropdownDirective,
    BuildStartComponent,
    BuildEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
