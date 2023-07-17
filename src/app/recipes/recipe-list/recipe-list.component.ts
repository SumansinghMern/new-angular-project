import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'npst-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecopeListComponent {
 recipes: Recipe[] = [
  new Recipe('Omlet', 'Best 2 Minute ready Food', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPaT86JHrkGfy_GFyDgBBMbxaM9XJHA3BbvHoyybMR7ZQR_xXezqOe6Fyi43nTmm0_kk&usqp=CAU'),
  new Recipe('Maggey', 'Not Eat Regular ', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272')
 ];

@Output() selectedRecipeEvent = new EventEmitter<Recipe>();

 onSelectRecipe(recipeData: Recipe){
  console.log("🚀 ~ file: recipe-list.component.ts:18 ~ RecopeListComponent ~ onSelectRecipe ~ recipeData:", recipeData)
  this.selectedRecipeEvent.emit(recipeData)
 }
}
