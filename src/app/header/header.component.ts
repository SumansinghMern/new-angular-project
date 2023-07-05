import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'npst-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;

  @Output() target = new EventEmitter<string>();

  onRecipe() {
    console.log('recipe 1111111');
    this.target.emit('recipe');
  }
  onShoping() {
    console.log('Shoping 2222222');
    this.target.emit('shoping');
  }
}
