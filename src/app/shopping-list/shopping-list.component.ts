import { Component } from '@angular/core';
import { Ingridiend } from '../shared/ingridient.model';

@Component({
  selector: 'npst-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingridients: Ingridiend[] = [
    new Ingridiend('Apple', 10),
    new Ingridiend('Banana', 10)
  ]
}
