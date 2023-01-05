import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/header/header.component';
import { RecipesComponent } from 'src/recipes/recipes.component';
import { RecipeDetailComponent } from 'src/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from 'src/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from 'src/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from 'src/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from 'src/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
