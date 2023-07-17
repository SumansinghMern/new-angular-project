import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'npst-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;

  @Output() target = new EventEmitter<string>();

  onRecipe() {
    this.target.emit('recipe');
  }
  onShoping() {
    this.target.emit('shoping');
  }
}
