import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.module';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Tacos Dorados',
      'Tortilla dorada enrollada',
      'https://www.cardamomo.news/__export/1609534137205/sites/debate/img/2021/01/01/receta_de_tacos_dorados_rellenos_de_papax_econxmicos_y_deliciosos_crop1609534119847.jpeg_242310155.jpeg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
