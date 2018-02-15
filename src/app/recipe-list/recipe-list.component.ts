import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../shared/recipes.service';


@Component({
  selector: 'ml-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.css'],
})

export class RecipeListComponent implements OnInit {

  selectedRecipe;
  clickedNew: boolean = false;
  clickedRecipe: boolean = false;
  recipes;

  //DI for RecipeService
  constructor(private recipeService: RecipeService) {}
  
  //Upon initial loading of page, gets recipes
  ngOnInit() {
    if(this.recipeService.items.length === 0) {
      this.recipes = this.recipeService.getRecipes();
    } else {
      this.recipes = this.recipeService.items;
    } 
  }

  //Just controlling click flags to determine
  //which form to display on right
  addNew() {
    this.clickedRecipe = false;
    this.clickedNew = true;
  }

  //Upon clicking one of the recipes in the recipe list
  //sets the selected recipe to show that info in the form on right
  onSelect(recipe: Recipe) {
    this.clickedNew = false;
    this.clickedRecipe = true;
    this.selectedRecipe = recipe;
  }

  //Adds new recipe to recipe list upon pressing submit button
  addNewRecipe(f) {
      this.recipes = this.recipeService.addRecipes(f);
  }

  //Deletes recipes from recipe list upon pressing delete button
  deleteRecipe(selectedRecipe) {
    this.recipes = this.recipeService.deleteRecipe(this.selectedRecipe);
  }
}