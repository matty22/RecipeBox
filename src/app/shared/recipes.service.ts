import { Injectable } from '@angular/core';
import { StorageSync, StorageStrategy } from '../../../node_modules/angular2-storage-sync';

import { Recipe } from '../recipe';

@Injectable()
export class RecipeService {
  
  //These are from the external library I'm 
  //using for storing recipes in local storage
  @StorageSync('rememberMe') remember: boolean = false;
  @StorageSync(null, StorageStrategy.Local) items: Array<any> = [];

  recipeArray = [
    {id: 0, name: "Peanut Tofu", ingredients: 'Tofu Peanut Butter', instructions: 'Sear'}, 
    {id: 1, name: "Kale Chips", ingredients: 'Kale Spices', instructions: 'Dehydrate'}, 
    {id: 2, name: "Red Lentil Daal", ingredients: 'Lentils Tomatoes', instructions: 'Sizzle'}, 
    {id: 3, name: "BBQ Seitan", ingredients: 'Seitan BBQ Sauce', instructions: 'Fry'}
    ];

  //If there's nothing in local storage,
  //onInit uses this method to get the initial array of recipes
  getRecipes() {
    if (this.items.length === 0) {
      return this.recipeArray;
    } else {
      return this.items;
    }
  }
  
  //If there's nothing in local storage, adds recipe to recipeArray
  //Else adds recipe to array of recipes in local storage
  addRecipes(form) {
    if (this.items.length === 0) {
      this.recipeArray.push(form);
      this.items = this.recipeArray;
      return this.items;
    } else {
      this.items = this.items.concat(form);
      return this.items;
    }
    

  }
  //Deletes recipe from RecipeArray if there is nothing in browser localstorage
  //Else deletes recipe from local storage if there are recipes stored in browser
  deleteRecipe(recipe) {
    if (this.items.length === 0) {
      let index = this.recipeArray.indexOf(recipe);
      this.recipeArray.splice(index, 1);
      this.items = this.recipeArray;
      return this.items;
    } else {
      for (var i = 0; i < this.items.length; i++) {
        if (recipe.name === this.items[i].name) {
          let index = i;
          let tempArr = this.items;
          tempArr.splice(index, 1);
          this.items = tempArr;
          return this.items;
        }
      }
    }
  }
}


