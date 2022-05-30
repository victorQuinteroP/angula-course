import {Component, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'
import {ShoppingListService} from "../shopping-lis.service";
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;

  constructor(private slService:ShoppingListService) { }

  onAdded(){
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.slService.addIngredient(newIngredient);
  }

}
