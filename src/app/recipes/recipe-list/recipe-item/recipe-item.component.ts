import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'npst-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() getRecipeEvent = new EventEmitter<Recipe>();

  constructor(){
  }

  onClickItem(){
    console.log("🚀 ~ file: recipe-item.component.ts:18 ~ RecipeItemComponent ~ onClickItem ~ this.recipe:", this.recipe)
    this.getRecipeEvent.emit(this.recipe);
  }
}
