import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'npst-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  selectedRecipeDetails: Recipe

  getRecipeDetails(recipeDetails: any){
    console.log("🚀 ~ file: recipes.component.ts:14 ~ RecipesComponent ~ getRecipeDetails ~ recipeDetails:", recipeDetails)
    this.selectedRecipeDetails = recipeDetails
  }
}
