import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  onAdded(){
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.IngredientAdded.emit(newIngredient);
  }

}
