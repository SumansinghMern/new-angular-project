import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingridiend } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'npst-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('inputName',{static:true}) name: ElementRef
  @ViewChild('inputAmount',{static:true}) amount : ElementRef

  @Output() addIngredentEvent = new EventEmitter<Ingridiend>();

  onAddIngredent(){
    console.log(this.name.nativeElement.value,"pppp",this.amount.nativeElement.value);
    this.addIngredentEvent.emit({name:this.name.nativeElement.value,amount:this.amount.nativeElement.value })
  }
}
