import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'npst-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecopeListComponent {
 recipes: Recipe[] = [
  new Recipe('test recipe', 'this is for test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'),
  new Recipe('test recipe', 'this is for test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272')
 ];


}
